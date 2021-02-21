import axios from "axios";

const SingleEpisode = () => {    

    

    const data = {
        "id": 5,
        "name": "Meeseeks and Destroy",
        "air_date": "January 20, 2014",
        "episode": "S01E05",
        "characters": [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/2",
            "https://rickandmortyapi.com/api/character/38",
            "https://rickandmortyapi.com/api/character/41",
            "https://rickandmortyapi.com/api/character/89",
            "https://rickandmortyapi.com/api/character/116",
            "https://rickandmortyapi.com/api/character/117",
            "https://rickandmortyapi.com/api/character/120",
            "https://rickandmortyapi.com/api/character/175",
            "https://rickandmortyapi.com/api/character/193",
            "https://rickandmortyapi.com/api/character/238",
            "https://rickandmortyapi.com/api/character/242",
            "https://rickandmortyapi.com/api/character/271",
            "https://rickandmortyapi.com/api/character/303",
            "https://rickandmortyapi.com/api/character/326",
            "https://rickandmortyapi.com/api/character/333",
            "https://rickandmortyapi.com/api/character/338",
            "https://rickandmortyapi.com/api/character/343",
            "https://rickandmortyapi.com/api/character/399",
            "https://rickandmortyapi.com/api/character/400"
        ],
        "url": "https://rickandmortyapi.com/api/episode/5",
        "created": "2017-11-10T12:56:34.236Z"
    };

    // Characters devuelve un array 
    const { name, id, air_date, episode, characters, created } = data;

    // const getCharacters = characters.map(async character => 
    //     await axios.get(character)
    //     .then((response) => {
    //         <span>{response.data.name}</span>;
    //     })        
    // );

    


    return (
        <>
            <div className="container">                
                <h5 className="text-center display-1">{name}</h5>                
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-6 col-sm-12 col-md-6 text-center">
                        <h3 className="text-muted display-6">Episode</h3>
                        <h3 className="display-1 text-warning">{id}</h3>
                        {/* <img src={image} width="90%" className="border rounded-0" alt={name} />         */}
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
                            <p><span className="text-muted">Created:</span> <span className="">{created.substring(0,10)}</span></p>                                
                        </li>
                        <li className="list-group-item">                            
                            {/* <p><span className="text-muted">Characters:</span></p>{getCharacters} */}
                        </li>                        
                    </ul>
                    </div>
                </div>
            </div>            
        </>
    );
}
 
export default SingleEpisode;