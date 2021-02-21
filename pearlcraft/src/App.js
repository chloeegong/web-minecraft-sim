import React, { Component } from 'react';
import Blocks from "./Blocks";
import NavBar from "./NavBar";
import About from './About';
import Team from './Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>

      <NavBar />

      <Blocks />

      <About />

      <Team />
    </div>
  );
}

export default App;
