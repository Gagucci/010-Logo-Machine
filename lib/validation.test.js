// require all shapes to be tested against
const { Circle, Square, Triangle } = require("./shapes");

// Test cases to validate whether the shapes inserted are valid against the set parameters for shapes.

// circle test cases
describe("circle", () => {
  test("should render a valid circle SVG", () => {
    const circle = new Circle();
    circle.setColor("green");
    expect(
      circle.render().toBe(`
        <svg width="300" height="300">
    <circle cx="150", cy="150", r="100", fill="${this.color}" />
    </svg>
    `)
    );
  });
});

// square test cases
describe("square", () => {
  test("should render a valid square SVG", () => {
    const square = new Square();
    square.setColor("red");
    expect(
      square.render().toBe(`
        <svg width="300" height="300">
        <rect x="25%", y="25%", width="50%", height="50%", fill="${this.color}" />
        </svg>
        `)
    );
  });
});

// triangle test cases
describe("triangle", () => {
  test("should render a valid triangle SVG", () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(
      triangle.render().toBe(`
        <svg width="300" height="300">
        <polygon points="150, 50 50, 250 250,250", fill="${this.color}" />
        </svg>
        `)
    );
  });
});
