import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';            
import Characters from './pages/Characters';
import Character from './pages/Character';
import Episodes from './pages/Episodes';
import Episode from './pages/Episode';
import NotFound from './pages/NotFound';   //Pagina de not found
import Header from './components/Header'; 

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch> {/*Empezamos a crear nuestras rutas, las rutas con  /"ruta"/:id es para acceder al contenido por medio de su id o dando clic en la tarjeta que este contenido en /"rutas"/  */}              
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
