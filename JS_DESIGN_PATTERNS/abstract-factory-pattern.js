class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case "Honda":
        return new Car("4", "v6", "grey");
      case "Benz":
        return new Car("4", "v10", "black");
    }
  }
}

class SuvFactory {
  createCar(type) {
    switch (type) {
      case "cx5":
        return new Car("4", "x9", "grey");
      case "cx6":
        return new Car("4", "z1", "black");
    }
  }
}

const carfactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManuFacturer = (model, type) => {
  switch (type) {
    case "car":
      return carfactory.createCar(model);
    case "suv":
      return suvFactory.createCar(model);
  }
};

const benz = autoManuFacturer("Benz", "car");
console.log(benz);
