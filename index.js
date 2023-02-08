// // Khai báo type cho các biến: string, number, boolean, undefined, null, date =>
// // khai báo biến với các type trên. dùng lệnh check type để kiểm tra
// //khai bao bien
var fullname = "Vu";
var age = 22;
var sex = true;
var phone = undefined;
var address = null;
var date = new Date();
// //khai bao bien & nhap du lieu dung
var id = "1";
var firstname = "Vu";
var gender = "male";
var birthday = new Date();
console.log(typeof birthday);
var user = {
    name: {
        firstname: "vu",
        lastname: "le"
    },
    age: 21
};
console.log("user => ", typeof user.name.firstname);
var commonObject = {
    name: "Vu",
    age: 22
};
console.log("commonObject =>", typeof commonObject.name);
//Khai báo type theo kiểu generic với đối số truyền vào là các type cơ bản: string, number, boolean,…
function identity(arg) {
    return arg;
}
var output = identity(true);
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
var T1 = arr([1, 2, 3]);
var T2 = arr(["a", "b"]);
var T3 = arr([true, false]);
var T4 = arr([["a"], 1, true]);
console.log("arr =>", typeof T1);
// //function
function add(a, b) {
    return a + b;
}
var sum = add("10", "20");
console.log("sum =>", sum);
// //arr.length
var arrr = [1, 2, 3, 4, 5];
console.log(arrr.length); // 5
