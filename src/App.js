import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import Students from './pages/Students';
import Turmas from './pages/Turmas';
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer';
import Jumb from './components/Jumb';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path='/'>
          <Jumb title='Olá,' active />
          <Home />
        </Route>

        <Route path='/students'>
          <Jumb title='/ Alunos' />
          <Students />
        </Route>
        
        <Route path='/turmas'>
          <Jumb title='/ Turmas' />
          <Turmas />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
