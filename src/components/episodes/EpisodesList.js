import { connect } from 'react-redux';
import CardEpisodes from './CardEpisodes';

const EpisodesList = ({ episodes, history }) => {
    console.log(episodes);
    
    const episodesList = episodes.map(episode => 
        <CardEpisodes episode={episode} key={episode.id} history={history} />
    );

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="display-1 text-center">Episodes</h1>
                    {episodesList}                    
                    </div>
                    <div className="col text-center">
                        <button className="btn btn-warning text-white me-2">Prev</button>
                        <button className="btn btn-warning text-white">Next</button>
                </div>
                
            </div>
        </>
    );
}
 
function mapStateToProps(state){
    return {
        episodes: state.episodes.episodesArray
    }

}
 
export default connect(mapStateToProps)(EpisodesList);