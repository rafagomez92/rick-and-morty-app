import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg justify-content-center navbar-dark bg-dark">
            <div className="container m-1">
                <Link className="navbar-brand" to="/">                
                    <img src="https://iconarchive.com/download/i106878/goodstuff-no-nonsense/free-space/rick.ico" width="40" height="40" alt="Rick and morty icon" className="d-inline-block align-top me-2 rounded-circle p-1 bg-warning" />
                    <span className="text-warning navbar-brand mb- h1">App</span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>            
                <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
                    <ul className="navbar-nav">                     
                        <li className="nav-item active">
                            <Link className="nav-link"to="/"><span className="text-white">Home</span></Link>                                                
                        </li>                                        
                        <li className="nav-item active">
                            <Link className="nav-link"to="/characters"><span className="text-white">Characters</span></Link>                                                
                        </li>                                        
                        <li className="nav-item active">
                            <Link className="nav-link"to="/episodes"><span className="text-white">Episodes</span></Link>                        
                        </li>                                        
                    </ul>
                </div>                            
            </div>
        </nav>
        </>
    );
}
 
export default Header;