import CardCharacter from './CardCharacter';
import { connect } from 'react-redux';
import { getCharactersAction } from '../../redux/charactersDuck';

const CharacterList = ({ characters, initialPage, endPage, getCharactersAction }) => {

    const listCharacters = characters.map(character => 
        <CardCharacter key={character.id}  character={character} />
    );

    console.log(initialPage);

    const onClickNext = (e) => {
        getCharactersAction(initialPage+1);        
    };
    const onClickPrev = (e) => {
        getCharactersAction(initialPage-1);        
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="display-1 text-center">Characters</h1>
                    {listCharacters}                    
                </div>
                <div className="col text-center">
                    {initialPage === 1 ? null : <button className="btn btn-warning text-white me-2" onClick={onClickPrev}>Prev</button>}
                    {initialPage === endPage ? null : <button className="btn btn-warning text-white" onClick={onClickNext}>Next</button>}
                </div>
                
            </div>
        </>
    );
};

function mapStateToProps(state){
    return {
        characters: state.characters.charactersArray,
        initialPage: state.characters.initialPage,
        endPage: state.characters.endPage
    }

}
 
export default connect(mapStateToProps, { getCharactersAction })(CharacterList);