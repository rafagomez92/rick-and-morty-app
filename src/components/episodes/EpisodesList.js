import { connect } from 'react-redux';
import CardEpisodes from './CardEpisodes';
import { getEpisodesAction } from '../../redux/episodesDuck';

const EpisodesList = ({ episodes, initialPage, endPage, getEpisodesAction }) => {    
    
    const episodesList = episodes.map(episode => 
        <CardEpisodes episode={episode} key={episode.id} />
    );

    const onClickNext = (e) => {
        getEpisodesAction(initialPage+1);        
    };
    const onClickPrev = (e) => {
        getEpisodesAction(initialPage-1);        
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="display-1 text-center">Episodes</h1>
                    {episodesList}                    
                    </div>
                    <div className="col text-center">
                    {initialPage === 1 ? null : <button className="btn btn-warning text-white me-2" onClick={onClickPrev}>Prev</button>}
                    {initialPage === endPage ? null : <button className="btn btn-warning text-white" onClick={onClickNext}>Next</button>}
                </div>
                
            </div>
        </>
    );
}
 
function mapStateToProps(state){
    return {
        episodes: state.episodes.episodesArray,
        initialPage: state.episodes.initialPage,
        endPage: state.episodes.endPage
    }

}
 
export default connect(mapStateToProps, { getEpisodesAction })(EpisodesList);