// // //function add
function add(a, b) {
    return a + b;
}
var sum = add("10", "20");
console.log("sum =>", sum);
// // //array.length: trả về số lượng phần tử trong mảng.
var arrlength = [1, 2, 3, 4, 5];
console.log(arrlength.length); // 5
// // //array.push(element): thêm phần tử vào cuối mảng.
var arrpush = [1, 2, 3];
arrpush.push(4);
console.log(arrpush); // [1, 2, 3, 4]
// // //array.pop(): xóa phần tử cuối cùng của mảng và trả về giá trị đã xóa.
var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("number =>", numbers);
console.log("element is : " + element);
//number => [ 1, 4 ]
// element is : 9
// // //array.unshift(element): thêm phần tử vào đầu mảng.
var arr2 = ["orange", "mango", "banana", "sugar"];
var length2 = arr2.unshift("water");
console.log("Returned array is : " + arr2);
console.log("Length of the array is : " + length2);
// Returned array is : water,orange,mango,banana,sugar
// Length of the array is : 5
// // //array.shift(): xóa phần tử đầu tiên của mảng và trả về giá trị đã xóa.
var arr3 = [1, 2, 3, 4, 5];
var shiftedValue = arr3.shift();
console.log(arr3); // [2, 3, 4, 5]
console.log(shiftedValue); // 1
// // //array.indexOf(element): trả về vị trí của phần tử trong mảng hoặc trả về -1 nếu không tìm thấy.
var arr4 = [1, 2, 3, 4, 5];
console.log(arr4.indexOf(3)); // 2
console.log(arr4.indexOf(6)); // -1
// // //array.slice(start, end): cắt mảng và trả về mảng mới từ vị trí start đến vị trí end (không bao gồm end).
var arr5 = [1, 2, 3, 4, 5];
var sliced = arr5.slice(1, 3);
console.log(sliced); // [2, 3]
// // //array.splice(index, deleteCount, item): xóa một hoặc nhiều phần tử tại vị trí index với số lượng deleteCount và thêm phần tử item.
var arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 2, 6);
console.log(arr6); // [1, 2, 6, 4, 5]
// // //array.forEach(callback): duyệt qua từng phần tử trong mảng và gọi hàm callback với mỗi phần tử.
var arr7 = [1, 2, 3, 4, 5];
arr7.forEach(function (element, index) {
    console.log("".concat(index, ": ").concat(element));
});
// // Output:
// // 0: 1
// // 1: 2
// // 2: 3
// // 3: 4
// // 4: 5
// // //array.map(callback): duyệt qua từng phần tử trong mảng, gọi hàm callback với mỗi phần tử và trả về một mảng mới từ kết quả của callback.
var arr8 = [1, 2, 3, 4, 5];
var doubled = arr8.map(function (x) { return x * 2; });
console.log(doubled); // [2, 4, 6, 8, 10]
var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var newArray = users.filter(function (user) { return user.age >= 30; });
console.log("new array =>", newArray);
// //concat(): dùng để nối 2 hay nhiều mảng với nhau
var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];
var array3 = array1.concat(array2);
console.log(array3); // > Array ["a", "b", "c", "d", "e", "f"]
console.log(array1); // > Array ["a", "b", "c"]
console.log(array2); // > Array ["d", "e", "f"]
// //find() : dùng để lọc phần tử trong mảng, tuy nhiên nó sẽ trả về giá trị đầu tiên tìm thấy ở trong mảng hoặc có thể trả về undefined nếu không tìm thấy
var array = [5, 12, 8, 130, 44];
var found = array.find(function (element) {
    return element > 10;
});
console.log(found); // > 12
console.log(array); // > Array [5, 12, 8, 130, 44]
//khi xác định type của 1 Array, ta cần xác định kiểu dữ liệu của Array đó là interface Array<T>.
//  <T> là type generic được truyền vào, <T> ở trong type của method Array.find() là type generic
//   của type generic đã được truyền vào interface Array<T> khi khởi tạo 1 Array
