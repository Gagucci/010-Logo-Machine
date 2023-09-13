// require all shapes to be tested against
const { Circle, Square, Triangle } = require("./shapes");

// Test cases to validate whether the shapes inserted are valid against the set parameters for shapes.

// circle test cases
describe("circle", () => {
  test("should render a valid circle SVG", () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toBe(
      `<circle cx="100" cy="100" r="50" fill="red" />`
    );
  });
});

// square test cases
describe("square", () => {
  test("should render a valid square SVG", () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toBe(
      `<rect x="50" y="25" width="150" height="150px" fill="green" />`
    );
  });
});

// triangle test cases
describe("triangle", () => {
  test("should render a valid triangle SVG", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toBe(
      `<polygon points="75 25 25 125 125 125" fill="blue" />`
    );
  });
});
