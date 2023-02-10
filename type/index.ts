// Khai báo type cho các biến: string, number, boolean, undefined, null, date =>
// khai báo biến với các type trên. dùng lệnh check type để kiểm tra

// //khai bao type
type typeString = string;
type typeNumber = number;
type typeBoolean = boolean;
type typeUndefined = undefined;
type typeNull = null;
type typeDate = Date;
// //khai bao bien
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fullname: typeString = "Vu";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const age: typeNumber = 22;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sex: typeBoolean = true;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const phone: typeUndefined = undefined;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const address: typeNull = null;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const date: typeDate = new Date();

// // Khai báo type cho các Object (id, name, gender, birthday) =>
// //  khai báo biến với type trên, nhập dữ liệu đúng và sai => dùng lệnh check type để kiểm tra

// //khai bao type
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type typeObject = {
	id: string;
	firstname: string;
	gender: "male | female";
	birthday: Date;
};
// //khai bao bien & nhap du lieu dung
const id = "1";
const firstname = "Vu";
const gender = "male";
const birthday = new Date();
console.log(typeof id);
console.log(typeof firstname);
console.log(typeof gender);
console.log(typeof birthday);
console.log(typeof phone);

// //Khai báo type cho Object nested (ex: user.name.last)
type typeName = {
	firstname: string;
	lastname: string;
};
type typeUser = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	sayHi(): any;
	name: typeName;
	age: number;
};
const user1: typeUser = {
	name: {
		firstname: "vu",
		lastname: "le",
	},
	age: 21,
	sayHi: function () {
		throw new Error("Function not implemented.");
	},
};
console.log("user => ", typeof user1.name.firstname);

// //Khai báo type cho Object chung (chưa biết trước các trường dữ liệu)
type typecommonObject = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[index: string]: any;
};
const commonObject: typecommonObject = {
	name: "Vu",
	age: 22,
};
console.log("commonObject =>", typeof commonObject.name);

//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function identity<String>(arg: string): string {
	return arg;
}
const output = identity<string>("vu");
console.log("output =>", typeof output);

// const a = identity<Object>([1, "vu"]);
// console.log("a =>", a);

// const getTuple: <T, U, V>(a: T, b: U, c: V) => [T, U, V] = (a, b, c) => {
// 	return [a, b, c];
// };

// const stringArray = getTuple("hello", "whole", "world");

// const numberArray = getTuple(1.25, 2.56, 4.25);

// const booleanArray = getTuple(true, false, true);

// const mixedArray = getTuple(1.25, "world", true);
// console.log("stringArray => ", typeof stringArray[0]);
// console.log("numberArray => ", typeof numberArray[0]);
// console.log("booleanArray => ", typeof booleanArray[0]);

// //Khai báo type theo kiểu generic với đối số Object
// class people {
// 	name: string;
// 	age: number;
// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }
// console.log("people => ", people);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GenericObject = { [key: string]: any };
const object: GenericObject = {
	name: "vu",
	age: 22,
	sex: true,
};
console.log("object => ", object);

// // Khai báo type cho mảng (mảng số, mảng chữ, mảng object)
// const myFunc1 = (arg: [string, number, boolean]) => {
// 	console.log(arg);
// };
// myFunc1(["hello world", 123, true]);
// console.log("myFunc1 =>", typeof myFunc1);

// //Khai báo type cho mảng (mảng số, chữ, mảng object, …)
const arr = <T>(arr: Array<T>) => [arr];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const T1 = arr([1, 2, 3]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const T2 = arr(["a", "b"]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const T3 = arr([true, false]);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const T4 = arr([["a"], 1, true]);
console.log("arr =>", typeof T1);

// //Namespace typescript
// Namespace trong TypeScript là một tính năng cho phép bạn tạo ra một không gian tên để chứa các đối tượng, hàm và biến.
// Nó giúp bạn tổ chức các đối tượng, hàm và biến theo một cách cấu trúc hợp lý và tránh trùng lặp tên.
// Bằng cách sử dụng namespace, bạn có thể giữ tính rõ ràng và tổ chức của mã của mình, giúp cho việc dễ dàng quản lý và bảo trì mã trong tương lai.
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace MyModule {
	export function doSomething() {
		// implementation goes here
	}

	export const variable = 42;
}

// Sử dụng các đối tượng trong namespace
MyModule.doSomething();
console.log(MyModule.variable); // 42

// //File d.ts
// Định nghĩa kiểu cho biến
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const myVariable: number;

// Định nghĩa kiểu cho hàm
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare function myFunction(a: string, b: number): boolean;

// Định nghĩa kiểu cho interface
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface myInterface {
	name: string;
	age: number;
}

// Định nghĩa kiểu cho class
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare class myClass {
	constructor(name: string, age: number);
	sayHello(): void;
}

// Định nghĩa kiểu cho namespace :
// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
declare namespace myNamespace {
	export const myVariable: number;
	export function myFunction(a: string, b: number): boolean;
	export interface myInterface {
		name: string;
		age: number;
	}
	export class myClass {
		constructor(name: string, age: number);
		sayHello(): void;
	}
}
// //Global types
// Global types là các kiểu dữ liệu được sử dụng trên toàn bộ hệ thống
//  và có thể sử dụng trong bất kỳ nơi nào trong mã nguồn.
//  Các kiểu dữ liệu toàn cầu bao gồm : `string` , `number`,`boolean`, `object`,`array`,…

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myName = "John Doe";

// //Các kiến thức trên có thể được viết trong TypeScript như sau:
//Variables
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const message = "Hello World";
//Function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function greet(name: string): string {
	return `Hello ${name}`;
}

//Promise
import { Promise } from "es6-promise";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fetchData = (): Promise<string> => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return new Promise((resolve, reject) => {
		resolve("Data fetched successfully");
	});
};
fetchData().then((data) => console.log("data =>", data));
//Class
class User {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	sayHi(): string {
		return `Hi, I'm ${this.age}`;
	}
}
const user = new User("John Doe", 30);
console.log(user.sayHi());
//Hướng đối tượng
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

// //Lodash
// -Là một thư viện javascript được sử dụng để xử lý chuỗi, hàm, đối tượng và nhiều thao tác khác trong lập trình.
//  Nó cung cấp một loạt hàm tiện ích để xử lý dữ liệu dễ dàng hơn và hiệu quả hơn
//Lodash function
import * as _ from "lodash";
// ._assign
const foo = { a: "a property" };
const bar = { b: 4, c: "an other property" };

const result = _.assign({ a: "an old property" }, foo, bar);
console.log(result);
// result => { a: 'a property', b: 4, c: 'an other property' }

// _.find
const users = [
	{ firstName: "John", lastName: "Doe", age: 28, gender: "male" },
	{ firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
	{ firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
	{ firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user12 = _.find(users, { lastName: "Doe", gender: "male" });
// user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

const underAgeUser = _.find(users, function (user) {
	return user.age < 18;
});
console.log("underAgeUser =>", underAgeUser);
// underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }
