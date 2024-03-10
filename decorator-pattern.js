class Coffee {
  cost() {
    return 5;
  }
}

// Concrete component
class SimpleCoffee extends Coffee {
  cost() {
    return super.cost();
  }
}

// Decorator
class MilkDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

// Decorator
class SugarDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

// Usage
const myCoffee = new SimpleCoffee();
console.log("Cost of simple coffee:", myCoffee.cost());

const milkCoffee = new MilkDecorator(myCoffee);
console.log("Cost of coffee with milk:", milkCoffee.cost());

const sugarMilkCoffee = new SugarDecorator(milkCoffee);
console.log("Cost of coffee with milk and sugar:", sugarMilkCoffee.cost());