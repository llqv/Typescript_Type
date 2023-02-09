"use strict";
export const __esModule = true;
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
import { Promise } from "es6-promise";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var fetchData = function () {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return new Promise(function (resolve, reject) {
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
