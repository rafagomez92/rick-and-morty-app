import EpisodesList from "../components/episodes/EpisodesList";


const Episodes = () => {
    return (
        <>
            <div className="container">
                <div className="p-4 card m-5 rounded-0 shadow-sm">                    
                    <EpisodesList />
                </div>                    
            </div>
        </>
    );
}
 
export default Episodes;