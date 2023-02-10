//extends
class Animal {
	name: string;
	constructor(theName: string) {
		this.name = theName;
	}
	move(distanceInMeters = 0) {
		console.log(`${this.name} moved ${distanceInMeters}m.`);
	}
}
class Snake extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 5) {
		console.log("Slithering...");
		super.move(distanceInMeters);
	}
}
class Horse extends Animal {
	constructor(name: string) {
		super(name);
	}
	move(distanceInMeters = 45) {
		console.log("Galloping...");
		super.move(distanceInMeters);
	}
}
const sam = new Snake("Sammy the Python");
//Sammy the Python moved 5m
const tom: Animal = new Horse("Tommy the Palomino");
//Tommy the Palomino moved 34m
sam.move();
tom.move(34);

//implement
interface Animal1 {
	makeSound(): void;
}
class Dog implements Animal1 {
	makeSound() {
		console.log("Woof woof!");
	}
}
const myDog = new Dog();
myDog.makeSound(); // Output: Woof woof!

//
interface Shape {
	getArea(): number;
}
class Square implements Shape {
	sideLength: number;
	constructor(sideLength: number) {
		this.sideLength = sideLength;
	}
	getArea() {
		return this.sideLength * this.sideLength;
	}
}
class Circle implements Shape {
	radius: number;
	constructor(radius: number) {
		this.radius = radius;
	}
	getArea() {
		return Math.PI * this.radius * this.radius;
	}
}
const square = new Square(5);
const circle = new Circle(3);
console.log(square.getArea()); // 25
console.log(circle.getArea()); // 28.27...
