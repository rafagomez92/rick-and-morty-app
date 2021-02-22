import CardCharacter from './CardCharacter';
import { connect } from 'react-redux';

const CharacterList = ({ characters }) => {

    const listCharacters = characters.map(character => 
        <CardCharacter key={character.id}  character={character} />
    );

    console.log(characters);
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="display-1 text-center">Characters</h1>
                    {listCharacters}                    
                </div>
                <div className="col text-center">
                    <button className="btn btn-warning text-white me-2">Prev</button>
                    <button className="btn btn-warning text-white">Next</button>
                </div>
                
            </div>
        </>
    );
};

function mapStateToProps(state){
    return {
        characters: state.characters.charactersArray
    }

}
 
export default connect(mapStateToProps)(CharacterList);