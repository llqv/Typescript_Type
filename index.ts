// // Khai báo type cho các biến: string, number, boolean, undefined, null, date =>
// // khai báo biến với các type trên. dùng lệnh check type để kiểm tra

// //khai bao type
type typeString = string;
type typeNumber = number;
type typeBoolean = boolean;
type typeUndefined = undefined;
type typeNull = null;
type typeDate = Date;
// //khai bao bien
const fullname: typeString = "Vu";
const age: typeNumber = 22;
const sex: typeBoolean = true;
const phone: typeUndefined = undefined;
const address: typeNull = null;
const date: typeDate = new Date();

// // Khai báo type cho các Object (id, name, gender, birthday) =>
// //  khai báo biến với type trên, nhập dữ liệu đúng và sai => dùng lệnh check type để kiểm tra

// //khai bao type
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
console.log(typeof birthday);

// //Khai báo type cho Object nested (ex: user.name.last)
type typeName = {
	firstname: string;
	lastname: string;
};
type typeUser = {
	name: typeName;
	age: number;
};
const user: typeUser = {
	name: {
		firstname: "vu",
		lastname: "le",
	},
	age: 21,
};
console.log("user => ", typeof user.name.firstname);

// //Khai báo type cho Object chung (chưa biết trước các trường dữ liệu)
type typecommonObject = {
	[index: string]: any;
};
const commonObject: typecommonObject = {
	name: "Vu",
	age: 22,
};
console.log("commonObject =>", typeof commonObject.name);

//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
function identity<Boolean>(arg: boolean): boolean {
	return arg;
}
const output = identity<boolean>(true);
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
const T1 = arr([1, 2, 3]);
const T2 = arr(["a", "b"]);
const T3 = arr([true, false]);
const T4 = arr([["a"], 1, true]);
console.log("arr =>", typeof T1);
