class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class carFactory {
  createCar(type) {
    switch (type) {
      case "Honda":
        return new Car("4", "v6", "grey");
      case "Benz":
        return new Car("4", "v10", "black");
    }
  }
}

const factory = new carFactory();
const myBenz = factory.createCar("Benz");

console.log(myBenz);
