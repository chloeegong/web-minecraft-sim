import React, { Component } from 'react';
import NavBar from "./NavBar";
import About from './About';
import Team from './Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>

      <NavBar />

      <About />

      <Team />
    </div>
  );
}

export default App;
