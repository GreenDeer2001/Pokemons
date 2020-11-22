import './App.css';
import {Route, Switch} from "react-router-dom" 
import Dashbord from "./components/Dashbord"
import Navbar from "./components/Navbar"
import PokemonDetails from "./components/PokemonDetails";


function App() {


  return (
    <main>
      <Navbar/>
      <Switch>
      <Route path="/" exact ><Dashbord/> </Route>
      <Route path="/:id" ><PokemonDetails/></Route>

      </Switch>
    </main>
  );
}

export default App;
