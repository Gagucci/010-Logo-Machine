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
    return `<circle cx="50%", cy="50%", r="100", fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="25%", y="25%", width="50%", height="50%", fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="500, 255 300, 625 700, 625", fill="${this.color}" />`;
  }
}

module.exports = { Circle, Square, Triangle };
