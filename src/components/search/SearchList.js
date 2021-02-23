const SearchList = ({item, option}) => {
    
    return (
        <div className="col mb-4">
            <div className="card rounded-0 shadow-sm" style={{width: "13"}}>
                {option === "character" ? 
                <img src={item.image} className="card-img-top img-fluid p-3" alt={item.name} />
                : null
                }
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>                    
                </div>                
                <div className="card-body">
                    <button className="btn btn-warning text-white" >Go</button>                                        
                </div>
            </div>
        </div>        
    );
}
 
export default SearchList;