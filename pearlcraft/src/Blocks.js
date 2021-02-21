import React, { Component } from 'react';
import Sketch from "react-p5";

/* global createCanvas, strokeWeight, rect, background, colorMode, HSB, noStroke,
createButton, backgroundColor, color, fill, ellipse, text, stroke, line, width,
height, mouseX, mouseY, mouseIsPressed, pmouseX, pmouseY, keyCode, ENTER, textFont */

let x = 50;
let y = 50;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);

    setUpChar();

    fruitSize = 10;
    score = 0;
    gameIsOver = false;

    time = 1000;

    fruitArr = [];

    for (let i = 0; i < 10; i++) {
      fruitArr.push(new Fruit());
    }

    gridLines();
    checkCollisions();
    displayScores();
    handleTime();
    displayTime();

    if(gameIsOver) {
      textSize(30);
      textAlign(CENTER);
      text("game over", width / 2, height / 2);
      textSize(15);
      text(`score: ${score}`, width / 2, height * 3/4);
      setupChar();
      return;
    }

  };

  const draw = (p5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  const setUpChar = () => {
    charX = width / 2;
    charY = height / 2;
    charV = 10;
  }

  const gridLines = () => {
  stroke(color("#71f071"));

    for (let i = 10; i < width; i = i + 10) {
      line(i, 0, i, height); //vertical line
      line(0, i, width, i); //horizontal line
    }
  }

  const keyPressed = () => {
    if(keyCode === LEFT_ARROW) {
      charX -= charV;
    } else if(keyCode === RIGHT_ARROW) {
      charX += charV;
    } else if(keyCode === UP_ARROW) {
      charY -= charV;
    } else if(keyCode === DOWN_ARROW) {
      charY += charV;
    }

    if(keyCode === ENTER) {
      setup();
    }
  }

  class Fruit {
    constructor() {
      this.x = Math.floor(random(1, 39)) * 10;
      this.y = Math.floor(random(1, 39)) * 10;
      this.color = random(360);

    }

    display() {
      fill(this.color, 80, 70);
      noStroke();
      rect(this.x, this.y, 10, 10);
    }
  }

  //check if fruit is collected, collide rect rect
  const checkCollisions = () => {

    // rearrange all fruits on the board, increment score
    for (let i = 0; i < fruitArr.length; i++) {
      hit = collideRectRect(charX, charY, 10, 10, fruitArr[i].x, fruitArr[i].y, 10, 10);
      if (hit) {
        score++;

        fruitArr = [];
        for (let i = 0; i < 10; i++) {
          fruitArr.push(new Fruit());
        }

      }

    }

  }

  const displayScores = () => {
    textSize(12);
    fill(0);

    text(`Score: ${score}`, 10, 20);
  }


  return <Sketch setup={setup} draw={draw} />;
};
