// Define a Shape interface
class Shape {
    draw() {
        throw new Error('Method draw() must be implemented.');
    }
}

// Concrete implementations of Shape interface
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}

class Rectangle extends Shape {
    draw() {
        console.log('Drawing a rectangle');
    }
}

class Triangle extends Shape {
    draw() {
        console.log('Drawing a triangle');
    }
}

// ShapeFactory responsible for creating shapes
class ShapeFactory {
    createShape(type) {
        switch(type) {
            case 'circle':
                return new Circle();
            case 'rectangle':
                return new Rectangle();
            case 'triangle':
                return new Triangle();
            default:
                throw new Error('Invalid shape type.');
        }
    }
}

// Usage
const factory = new ShapeFactory();

const circle = factory.createShape('circle');
circle.draw(); 

const rectangle = factory.createShape('rectangle');
rectangle.draw(); 

const triangle = factory.createShape('triangle');
triangle.draw();