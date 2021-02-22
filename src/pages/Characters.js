import CharactersList from '../components/characters/CharactersList';
const Characters = () => {
    return (
        <>
            <div className="container">
                <div className="p-4 card m-5 rounded-0 shadow-sm">                    
                    <CharactersList />
                </div>                    
            </div>            
        </>
    );
}
 
export default Characters;