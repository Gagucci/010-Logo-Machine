// require all shapes to be tested against
const { Circle, Square, Triangle } = require("./shapes");

// Test cases to validate whether the shapes inserted are valid against the set parameters for shapes.

// circle test cases
describe("circle", () => {
  test("should render a valid circle SVG", () => {
    const circle = new Circle();
    circle.setColor("${this.color}");
    expect(
      circle.render().toBe(`
        <svg width="300" height="200">
    <circle cx="100", cy="100", r="100", fill="${this.color}" />
    </svg>
    `)
    );
  });
});

// square test cases
describe("square", () => {
  test("should render a valid square SVG", () => {
    const square = new Square();
    square.setColor("${this.color}");
    expect(
      square.render().toBe(`
        <svg width="300" height="200">
        <rect x="50", y="25", width="150", height="150", fill="${this.color}" />
        </svg>
        `)
    );
  });
});

// triangle test cases
describe("triangle", () => {
  test("should render a valid triangle SVG", () => {
    const triangle = new Triangle();
    triangle.setColor("${this.color}");
    expect(
      triangle.render().toBe(`
        <svg width="300" height="200">
        <polygon points="150, 50 50, 250 250,250", fill="${this.color}" />
        </svg>
        `)
    );
  });
});

