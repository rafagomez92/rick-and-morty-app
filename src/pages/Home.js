import FormSearch from "../components/home/FormSearch"
import Recent from "../components/home/Recent"

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="p-4 card m-5 rounded-0 shadow-sm">
                    <FormSearch />                    
                </div>
                    <Recent />                 
            </div>
        </>
    );
}
 
export default Home;