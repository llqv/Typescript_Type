var __extends = (this && this.__extends) || (function () {
	var extendStatics = function (d, b) {
		extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
		return extendStatics(d, b);
	};
	return function (d, b) {
		if (typeof b !== "function" && b !== null)
			throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
		extendStatics(d, b);
		function __() { this.constructor = d; }
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
})();
//extends
var Animal = /** @class */ (function () {
	function Animal(theName) {
		this.name = theName;
	}
	Animal.prototype.move = function (distanceInMeters) {
		if (distanceInMeters === void 0) { distanceInMeters = 0; }
		console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
	};
	return Animal;
}());
var Snake = /** @class */ (function (_super) {
	__extends(Snake, _super);
	function Snake(name) {
		return _super.call(this, name) || this;
	}
	Snake.prototype.move = function (distanceInMeters) {
		if (distanceInMeters === void 0) { distanceInMeters = 5; }
		console.log("Slithering...");
		_super.prototype.move.call(this, distanceInMeters);
	};
	return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
	__extends(Horse, _super);
	function Horse(name) {
		return _super.call(this, name) || this;
	}
	Horse.prototype.move = function (distanceInMeters) {
		if (distanceInMeters === void 0) { distanceInMeters = 45; }
		console.log("Galloping...");
		_super.prototype.move.call(this, distanceInMeters);
	};
	return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
//Sammy the Python moved 5m
var tom = new Horse("Tommy the Palomino");
//Tommy the Palomino moved 34m
sam.move();
tom.move(34);
var Dog = /** @class */ (function () {
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	function Dog() {
	}
	Dog.prototype.makeSound = function () {
		console.log("Woof woof!");
	};
	return Dog;
}());
var myDog = new Dog();
myDog.makeSound(); // Output: Woof woof!
var Square = /** @class */ (function () {
	function Square(sideLength) {
		this.sideLength = sideLength;
	}
	Square.prototype.getArea = function () {
		return this.sideLength * this.sideLength;
	};
	return Square;
}());
var Circle = /** @class */ (function () {
	function Circle(radius) {
		this.radius = radius;
	}
	Circle.prototype.getArea = function () {
		return Math.PI * this.radius * this.radius;
	};
	return Circle;
}());
var square = new Square(5);
var circle = new Circle(3);
console.log(square.getArea()); // 25
console.log(circle.getArea()); // 28.27...
