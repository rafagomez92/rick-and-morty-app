import { getEpisodeAction } from '../../redux/episodesDuck';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CardEpisodes = ({ episode, getEpisodeAction }) => {
    const { name, air_date, id } = episode;    
    let history = useHistory();

    const onClick = (e) => {  
        e.preventDefault();
        getEpisodeAction(id);
        history.push(`/episode/${id}`);
    };


    
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 p-3">
            <div className="card rounded-0 shadow-sm">                            
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{air_date}</p>
                </div>                
                <div className="card-body">
                    <button className="btn btn-warning text-white w-100" onClick={onClick}>Details</button>                                        
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state){
    return {    
    }

}


export default connect(mapStateToProps,{ getEpisodeAction })(CardEpisodes);
