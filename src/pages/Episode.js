import SingleEpisode from "../components/episode/SingleEpisode";

const Episode = () => {
    return (
        <>
            <div className="container">
                <div className="p-4 card m-5 rounded-0 shadow-sm">                    
                    <SingleEpisode />
                </div>                    
            </div>
        </>
    );
}
 
export default Episode;