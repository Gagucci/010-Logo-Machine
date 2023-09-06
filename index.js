const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Logo {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }
  render() {
    return (
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">' +
      this.shapeEl +
      this.textEl +
      "</svg>"
    );
  }
  addTextEl(text, color) {
    this.textEl += `<text x="50%" y="50%" dy="0.35em" text-anchor="middle" fill="${color}">${text}</text>`;
  }
  addShapeEl(shape) {
    this.shapeEl += shape.render();
  }
}

const logoPrompt = [
  {
    type: "input",
    name: "text",
    message: "Choose 3 characters to be displayed on your generated logo:",
  },
  {
    type: "input",
    name: "color",
    message: "Choose a color for your text:",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your logo:",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Choose a color for your shape():",
  },
];
