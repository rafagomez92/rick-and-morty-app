import { getCharacterAction } from '../../redux/charactersDuck';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

const CardCharacter = ({ character, getCharacterAction }) => {
    const { name, id, status, image } = character;

    let history = useHistory();

    const onClick = (e) => {  
        e.preventDefault();        
        getCharacterAction(id);
        history.push(`/character/${id}`);
    };

    return (
        <div className="col-12 col-sm-6 col-sm-12 col-md-6 col-lg-4 p-3">
            <div className="card rounded-0 shadow-sm" style={{width: "15rem"}}>
                <img src={image} className="card-img-top p-3" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text text-muted">{status}</p>
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


export default connect(mapStateToProps,{ getCharacterAction })(CardCharacter);