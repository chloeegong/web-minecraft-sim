import React, { Component } from 'react';
import NavBar from "./NavBar";
import './App.css';

class Team extends Component {
  render() {
    return (

      <div id="team-wrapper">

        <h1 className="team">our team</h1>
          <h2 className="team-indiv">annika</h2>
            <p> rowan u / 2022
            </p>
          <h2 className="team-indiv">brittany</h2>
            <p> rowan u / 2021
            </p>
          <h2 className="team-indiv">chloee</h2>
            <p> csulb / 2024
            </p>
          <h2 className="team-indiv">melody</h2>
            <p> ncsu / 2022
            </p>
      </div>
    );
  }
}

export default Team;
