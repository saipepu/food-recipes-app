import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './Home/Home';
import Menu from './Menu/Menu';
import Recipes from './Recipes/Recipes';

const App = () => {

  return(
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/recipes/:id" component={Recipes} />
      </Switch>
    </Router>
    </>
  )
}
export default App;