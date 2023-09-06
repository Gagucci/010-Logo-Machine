// require all shapes to be tested against
const { Circle, Square, Triangle } = require("./shapes");

// Test cases to validate whether the shapes inserted are valid against the set parameters for shapes.

// circle test cases
describe("circle", () => {
  test("should render a valid circle SVG", () => {
    const circle = new Circle();
    circle.setColor("green");
    expect(
      circle
        .render()
        .toBe('<circle cx="50%", cy="50%", r="100", fill="green" />')
    );
  });
});

// square test cases
describe("square", () => {
  test("should render a valid square SVG", () => {
    const square = new Square();
    square.setColor("red");
    expect(
      square
        .render()
        .toBe(
          '<rect x="25%", y="25%", width="50%", height="50%", fill="red" />'
        )
    );
  });
});

// triangle test cases
describe("triangle", () => {
  test("should render a valid triangle SVG", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(
      triangle
        .render()
        .toBe('<polygon points="500, 255 300, 625 700, 625", fill="blue" />')
    );
  });
});
