const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class Logo {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">' +
      ${this.shapeEl} ${this.textEl} 
      </svg>`
  }
  addTextEl(text, textColor) {
    this.textEl = `
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="sans-serif" font-size="25px">${text}</text>
    `;
  }
  // uses specified shape to render
  addShapeEl(shape) {
    this.shapeEl += shape.render();
  };
};

// prompt for user input on logo parameters
const logoPrompt = [
  {
    type: "input",
    name: "text",
    message: "Choose 3 characters to be displayed on your generated logo:",
  },
  {
    type: "input",
    name: "textColor",
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
    message: "Choose a color for your shape:",
  },
];

// function to prompt logo creation and creation of logo.svg file
function init() {
  inquirer.prompt(logoPrompt).then((answers) => {
    const logo = new Logo();
    logo.addTextEl(answers.text, answers.textColor);
    switch (answers.shape) {
      case "Circle":
        const circle = new Circle();
        circle.setColor(answers.shapeColor);
        logo.addShapeEl(circle);
        break;
      case "Square":
        const square = new Square();
        square.setColor(answers.shapeColor);
        logo.addShapeEl(square);
        break;
      case "Triangle":
        const triangle = new Triangle();
        triangle.setColor(answers.shapeColor);
        logo.addShapeEl(triangle);
        break;
    }
    fs.writeFile("logo.svg", logo.render(), (err) => {
      if (err) throw err;
      console.log("Logo created!");
    });
  });
}

init();
