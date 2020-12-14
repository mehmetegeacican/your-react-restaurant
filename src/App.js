import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

import MenuPage from './components/MenuPage'

import Footer from './components/Footer';
import Starters from './menus/Starters';
import Pizzas from './menus/Pizzas';
import Pastas from './menus/Pastas';
import Desserts from './menus/Desserts';


function App() {
  return (
    <BrowserRouter>
       <div className="App">
          
          <NavBar></NavBar>
          <Route exact path = '/' component = {HomePage}></Route>

          <Route path = '/menu' component = {MenuPage}></Route>
          <Route exact path = '/menu' component = {Starters}></Route>
          <Route path = '/menu/pizzas' component = {Pizzas}></Route>
          <Route path = '/menu/pastas' component = {Pastas}></Route>
          <Route path = '/menu/desserts' component = {Desserts}></Route>
        
          <Footer></Footer>


      </div>
    </BrowserRouter>
  );
}

export default App;
