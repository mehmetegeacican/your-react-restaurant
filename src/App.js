import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import MenuPage from './components/MenuPage'
import ContactPage from './components/ContactPage'


function App() {
  return (
    <BrowserRouter>
       <div className="App">
          
          <NavBar></NavBar>
          <Route exact path = '/' component = {HomePage}></Route>
          <Route path = '/about' component = {AboutPage}></Route>
          <Route path = '/menu' component = {MenuPage}></Route>
          <Route path = '/contact' component = {ContactPage}></Route>


      </div>
    </BrowserRouter>
  );
}

export default App;
