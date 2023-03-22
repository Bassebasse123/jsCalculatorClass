class Calculator {
  constructor(x, y, width) {
    (this.x = x), (this.y = y), (this.width = width), (this.PI = 3.141592653589793);
    this.E = 2.718281828459045;
    //properties
  }

  //getter
  get pi() {
    return `PI (${this.PI})`
  }

  get e() {
    return `E (${this.E})`
  }
  //methods
  ratio(x, y, width) {
    let height = (width * y) / x;
    return `height is ${height} on ratio ${x}:${y}`;
  }

  percentage(x, y) {
    return `${((x / y) * 100).toFixed(4)} %`;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return y - x;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    if (x === 0) {
      return "If you divide by 0, you're betraying humanity!";
    } else {
      return y / x;
    }
  }

  modulation(x, y) {
    if (x === 0) {
      return "If you divide by 0, you're betraying humanity!";
    } else {
      return y % x;
    }
  }

  elevate(x, y) {
    return x ** y;
  }

  sqrt(x) {
    return Math.sqrt(x);
  }
}

const calculate = new Calculator();

console.log(calculate.ratio(4, 3, 10));
console.log(calculate.percentage(12345, 123487));
console.log(calculate.add(20, 50));
console.log(calculate.subtract(20, 50));
console.log(calculate.multiply(20, 50));
console.log(calculate.divide(2, 25));
console.log(calculate.modulation(10, 25));
console.log(calculate.elevate(10, 5));
console.log(calculate.sqrt(16));
