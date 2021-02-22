const Search = ({item, option}) => {
    
    return (
        <div className="col-12 col-sm-6 col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="card rounded-0 shadow-sm" style={{width: "15rem"}}>
                {option === "character" ? 
                <img src={item.image} className="card-img-top p-3" alt={item.name} />
                : null
                }
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>                    
                </div>                
                <div className="card-body">
                    <button className="btn btn-warning text-white w-100" >Go</button>                                        
                </div>
            </div>
        </div>        
    );
}
 
export default Search;