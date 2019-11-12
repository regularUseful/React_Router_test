import React from 'react';
import Dog from './dog';
import Cat from './cat';
import Fish from './fish';
import Home from './home';
import Farm from './farm';
import NotFound from './NotFound';
import {Route, Switch, NavLink} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dog' component={Dog} />
        <Route exact path='/cat' component={Cat} />
        <Route exact path='/fish' component={Fish} />
        <Route exact path='/farm/' component={Farm} />
        <Route exact path='/farm/:animalNameOne/:animalNameTwo' component={Farm} />
        <Route component={NotFound} />
      </Switch>
      <nav className="animal-nav">
        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
        <NavLink exact activeClassName="active-link" to="/dog">Dog</NavLink>
        <NavLink exact activeClassName="active-link" to="/cat">Cat</NavLink>
        <NavLink exact activeClassName="active-link" to="/fish">fish</NavLink>
        <NavLink exact activeClassName="active-link" to="/farm">Farm</NavLink>
      </nav>
    </div>
  );
}

export default App;
