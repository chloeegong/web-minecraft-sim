import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div id="info-wrapper">

        <h1 className="info-header">about us</h1>
          <p className="info-container">
            pearlhacks hackathon 2021. we're a team of students from across the
            united states working to replicate the core gameplay of standard
            minecraft in a web game interface. our goals include (1) analyzing
            minecraft and understanding the core tasks of a player, (2) creating
            a game design that mirrors the original game, (3) designing an
            interface that emphasizes clear correlation between the tasks players
            complete in the original game versus our web game, and (4) implementing
            data storage mechanisms.
          </p>
          <p className="info-container">
            technologies used: react js, npm, p5.js
          </p>

      </div>
    );
  }
}

export default About;
