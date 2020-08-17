import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import Students from './pages/Students';
import Classes from './pages/Classes';
import NavigationBar from './components/NavigationBar'


function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/students' component={Students} />
        <Route path='/classes' component={Classes} />
      </Switch>
    </Router>
  );
}

export default App;
