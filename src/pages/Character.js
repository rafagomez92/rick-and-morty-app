import SingleCharacter from "../components/character/SingleCharacter"

const Character = () => {
    return (
        <>            
            <div className="container">
                <div className="p-4 card m-5 rounded-0 shadow-sm">                    
                    <SingleCharacter />
                </div>                    
            </div>            
        </>
    );
}
 
export default Character;