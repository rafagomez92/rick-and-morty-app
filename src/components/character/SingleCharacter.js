const SingleCharacter = () => {
    // Nota: origin, location devuelven un objeto 
    // con dos valores name y url,
    // Episode devuelve un array

    // const { name, status, species, gender, origin, location, episode, created, img } = props;
    
    
    const data = 
        {
            "id": 335,
            "name": "Steve",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Male",
            "origin": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/335.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/31",                                
                "https://rickandmortyapi.com/api/episode/3"
            ],
            "url": "https://rickandmortyapi.com/api/character/335",            
            "created": "2017-11-04T19:09:56.428Z"
        }
    

    const { name, status, species, type, gender, origin, location, episode, created, image } = data;    
    
    const episodeList = episode.map(title => {
        // Consiguiendo el ID de los episodios a través de la url (Convertimos en array el valor de la url)                 
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
                <h5 class="text-center display-1">{name}</h5>                
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-sm-12 col-md-6 text-center">
                        <img src={image} width="90%" className="border rounded-0" alt={name} />        
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6">                        
                    <ul class="list-group list-group-flush">                        
                        <li class="list-group-item">
                            <p><span className="text-muted">Status:</span> <span className="">{status}</span></p>                                                                                            
                        </li>
                        <li class="list-group-item">                            
                            <p><span className="text-muted">Species:</span> <span className="">{species}</span></p>                                                                
                        </li>
                        <li class="list-group-item">                            
                            <p><span className="text-muted">Type:</span> <span className="">{type}</span></p>                                
                        </li>
                        <li class="list-group-item">                            
                            <p><span className="text-muted">Gender:</span> <span className="">{gender}</span></p>                                
                        </li>
                        <li class="list-group-item">                            
                            <p><span className="text-muted">Origin:</span> <span className="">{origin.name}</span></p>                                
                        </li>
                        <li class="list-group-item">                            
                            <p><span className="text-muted">Location:</span> <span className="">{location.name}</span></p>                                
                        </li>
                        <li class="list-group-item">                                                        
                            <p><span className="text-muted">Created:</span> <span className="">{created.substring(0,10)}</span></p>                                
                        </li>
                        <li class="list-group-item">                            
                            <p><span className="text-muted">Episodes:</span></p>{episodeList}
                        </li>                        
                    </ul>
                    </div>
                </div>
            </div>            
        </>
    );
}
 
export default SingleCharacter;