import React from 'react';
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'
import Category from './Components/Category'
import ProductPage from './Components/ProductPage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/E-Commerce" exact component={HomePage} />
          <Route path="/mens" component={Category} />
          <Route path="/product" component={ProductPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
