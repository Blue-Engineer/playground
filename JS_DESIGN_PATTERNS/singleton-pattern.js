let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const myCar = new Car(2, "v8", "black");
const myCar2 = new Car(4, "v7", "blue");

console.log(myCar);
console.log(myCar2);
