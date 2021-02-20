import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';            
import Characters from './pages/Characters';
import Character from './pages/Character';
import Episodes from './pages/Episodes';
import Episode from './pages/Episode';
import NotFound from './pages/NotFound'; 
import Header from './components/Header'; 

function App() {
  return (
    <>
      <Router> {/* Creaction de las Rutas, los componentes se encuentran en la carpeta de pages */}
        <Header />        
        <Switch>               
              <Route exact path="/" component={Home}/>
              <Route path="/characters" component={Characters}/>              
              <Route path="/character/:id" component={Character}/>    
              <Route path="/episodes" component={Episodes}/>                            
              <Route path="/episode/:id" component={Episode}/>              
              <Route component={NotFound}/>
          </Switch>                
      </Router>
    </>
  );
}

export default App;
