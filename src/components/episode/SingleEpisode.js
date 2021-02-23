import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const SingleEpisode = ({ currentEpisode }) => {    
    // Characters devuelve un array 
    console.log(currentEpisode); 
    const { id, name, air_date, episode, characters, created } = currentEpisode;  
    
    return (
        <>        
            <div className="container">                
            <h5 className="text-center display-1">{name}</h5>                
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-sm-12 col-md-6 text-center">
                        <h3 className="text-muted display-6">Episode</h3>
                        <h3 className="display-1 text-warning">{id}</h3>                        
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">                        
                    <ul className="list-group list-group-flush">                        
                        <li className="list-group-item">
                            <p><span className="text-muted">Air date:</span> <span className="">{air_date}</span></p>                                                                                            
                        </li>
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Episode:</span> <span className="">{episode}</span></p>                                                                
                        </li>                        
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Created:</span> <span className="">{created}</span></p>                                
                        </li>
                        <li className="list-group-item">                            
                            {/* <p><span className="text-muted">Characters:</span></p>{getCharacters} */}
                        </li>                        
                    </ul>
                    </div>
                    <div className="col text-center">                        
                        <Link to='/episodes' className="btn btn-warning text-white">Episodes</Link>
                    </div>
                </div>
            </div>            
        </>
    );
}

function mapStateToProps(state){
    return {
        currentEpisode: state.episodes.currentEpisode        
    }
}
 
export default connect(mapStateToProps)(SingleEpisode);