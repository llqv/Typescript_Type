"use strict";
// Khai báo type cho các biến: string, number, boolean, undefined, null, date =>
// khai báo biến với các type trên. dùng lệnh check type để kiểm tra
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
// eslint-disable-next-line no-undef
exports.__esModule = true;
// //khai bao bien
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var fullname = "Vu";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var age = 22;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var sex = true;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var phone = undefined;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var address = null;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var date = new Date();
// //khai bao bien & nhap du lieu dung
var id = "1";
var firstname = "Vu";
var gender = "male";
var birthday = new Date();
console.log(typeof id);
console.log(typeof firstname);
console.log(typeof gender);
console.log(typeof birthday);
console.log(typeof phone);
var user1 = {
	name: {
		firstname: "vu",
		lastname: "le"
	},
	age: 21,
	sayHi: function () {
		throw new Error("Function not implemented.");
	}
};
console.log("user => ", typeof user1.name.firstname);
var commonObject = {
	name: "Vu",
	age: 22
};
console.log("commonObject =>", typeof commonObject.name);
//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function identity(arg) {
	return arg;
}
var output = identity("vu");
console.log("output =>", typeof output);
var object = {
	name: "vu",
	age: 22,
	sex: true
};
console.log("object => ", object);
// // Khai báo type cho mảng (mảng số, mảng chữ, mảng object)
// const myFunc1 = (arg: [string, number, boolean]) => {
// 	console.log(arg);
// };
// myFunc1(["hello world", 123, true]);
// console.log("myFunc1 =>", typeof myFunc1);
// //Khai báo type cho mảng (mảng số, chữ, mảng object, …)
var arr = function (arr) { return [arr]; };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var T1 = arr([1, 2, 3]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var T2 = arr(["a", "b"]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var T3 = arr([true, false]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var T4 = arr([["a"], 1, true]);
console.log("arr =>", typeof T1);
// //Namespace typescript
// Namespace trong TypeScript là một tính năng cho phép bạn tạo ra một không gian tên để chứa các đối tượng, hàm và biến.
// Nó giúp bạn tổ chức các đối tượng, hàm và biến theo một cách cấu trúc hợp lý và tránh trùng lặp tên.
// Bằng cách sử dụng namespace, bạn có thể giữ tính rõ ràng và tổ chức của mã của mình, giúp cho việc dễ dàng quản lý và bảo trì mã trong tương lai.
// eslint-disable-next-line @typescript-eslint/no-namespace
var MyModule;
(function (MyModule) {
	function doSomething() {
		// implementation goes here
	}
	MyModule.doSomething = doSomething;
	MyModule.variable = 42;
})(MyModule || (MyModule = {}));
// Sử dụng các đối tượng trong namespace
MyModule.doSomething();
console.log(MyModule.variable); // 42
// //Global types
// Global types là các kiểu dữ liệu được sử dụng trên toàn bộ hệ thống
//  và có thể sử dụng trong bất kỳ nơi nào trong mã nguồn.
//  Các kiểu dữ liệu toàn cầu bao gồm : `string` , `number`,`boolean`, `object`,`array`,…
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var myName = "John Doe";
// //Các kiến thức trên có thể được viết trong TypeScript như sau:
//Variables
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var message = "Hello World";
//Function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function greet(name) {
	return "Hello ".concat(name);
}
//Promise
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
var es6_promise_1 = require("es6-promise");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var fetchData = function () {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return new es6_promise_1.Promise(function (resolve, reject) {
		resolve("Data fetched successfully");
	});
};
fetchData().then(function (data) { return console.log("data =>", data); });
//Class
var User = /** @class */ (function () {
	function User(name, age) {
		this.name = name;
		this.age = age;
	}
	User.prototype.sayHi = function () {
		return "Hi, I'm ".concat(this.age);
	};
	return User;
}());
var user = new User("John Doe", 30);
console.log(user.sayHi());
//Hướng đối tượng
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
// //Lodash
// -Là một thư viện javascript được sử dụng để xử lý chuỗi, hàm, đối tượng và nhiều thao tác khác trong lập trình.
//  Nó cung cấp một loạt hàm tiện ích để xử lý dữ liệu dễ dàng hơn và hiệu quả hơn
//Lodash function
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
var _ = require("lodash");
// ._assign
var foo = { a: "a property" };
var bar = { b: 4, c: "an other property" };
var result = _.assign({ a: "an old property" }, foo, bar);
console.log(result);
// result => { a: 'a property', b: 4, c: 'an other property' }
// _.find
var users = [
	{ firstName: "John", lastName: "Doe", age: 28, gender: "male" },
	{ firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
	{ firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
	{ firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var user12 = _.find(users, { lastName: "Doe", gender: "male" });
// user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }
var underAgeUser = _.find(users, function (user) {
	return user.age < 18;
});
console.log("underAgeUser =>", underAgeUser);
// underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }
