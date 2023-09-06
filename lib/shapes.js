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
    <svg width="300" height="300">
    <circle cx="150", cy="150", r="100", fill="${this.color}" />
    </svg>
    `;
  }
}

class Square extends Shape {
  render() {
    return `
    <svg width="300" height="300">
    <rect x="25%", y="25%", width="50%", height="50%", fill="${this.color}" />
    </svg>
    `;
  }
}

class Triangle extends Shape {
  render() {
    return `
    <svg width="300" height="300">
    <polygon points="150, 50 50, 250 250,250", fill="${this.color}" />
    </svg>
    `;
  }
}

module.exports = { Circle, Square, Triangle };
