class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Circle extends Shape {
  render() {
    return `
    <svg width="300" height="200">
    <circle cx="100" cy="100" r="100" fill="${this.color}" />
    </svg>
    `;
  }
}

class Square extends Shape {
  render() {
    return `
    <svg width="300" height="200">
    <rect x="50" y="25" width="150" height="150" fill="${this.color}" />
    </svg>
    `;
  }
}

class Triangle extends Shape {
  render() {
    return `
    <svg width="300" height="200">
    <polygon points="150 50 50 250 250 250" fill="${this.color}" />
    </svg>
    `;
  }
}

module.exports = { Circle, Square, Triangle };
