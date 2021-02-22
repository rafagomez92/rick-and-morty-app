import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SingleCharacter = ({ currentCharacter }) => {
    // Nota: origin, location devuelven un objeto 
    // con dos valores name y url,
    // Episode devuelve un array
    const { name, status, species, gender, type, origin, location, episode, created, image } = currentCharacter;    
    
    console.log(currentCharacter);
    const episodeList = episode.map(title => {
        // Consiguiendo el ID de los episodios a través de la url                 
        const getID = title.split('').reverse().join('').split('/', 1).reverse().join();                
        return (
            <button className="btn btn-warning text-white m-1" key={getID}> 
                {getID}
            </button>
        )
    }
    ); 

    return (
        <>
            <div className="container">
                <h5 className="text-center display-1">{name}</h5>                
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-sm-12 col-md-6 text-center">
                        <img src={image} width="90%" className="border rounded-0" alt={name} />        
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">                        
                    <ul className="list-group list-group-flush">                        
                        <li className="list-group-item">
                            <p><span className="text-muted">Status:</span> <span className="">{status}</span></p>                                                                                            
                        </li>
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Species:</span> <span className="">{species}</span></p>                                                                
                        </li>
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Type:</span> <span className="">{type}</span></p>                                
                        </li>
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Gender:</span> <span className="">{gender}</span></p>                                
                        </li>
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Origin:</span> <span className="">{origin.name}</span></p>                                
                        </li>
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Location:</span> <span className="">{location.name}</span></p>                                
                        </li>
                        <li className="list-group-item">                            
                            <p><span className="text-muted">Episodes:</span></p>{episodeList}
                        </li>                        
                        <li className="list-group-item">                                                        
                            <p><span className="text-muted">Created:</span> <span className="">{created.substring(0,10)}</span></p>                                
                        </li>
                    </ul>
                    </div>
                    <div className="col text-center">                        
                        <Link to='/characters' className="btn btn-warning text-white w-25">Character</Link>
                    </div>
                </div>
            </div>            
        </>
    );
}

function mapStateToProps(state){
    return {
        currentCharacter: state.characters.currentCharacter
    }
};
 
export default connect(mapStateToProps)(SingleCharacter);