const CardCharacter = ({ character }) => {
    const { name, status, image } = character;

    return (
        <div className="col-12 col-sm-6 col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="card rounded-0 shadow-sm" style={{width: "15rem"}}>
                <img src={image} className="card-img-top p-3" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{status}</p>
                </div>                
                <div className="card-body">
                    <button className="btn btn-warning text-white w-100">Details</button>                                        
                </div>
            </div>
        </div>
    );
}
 
export default CardCharacter;