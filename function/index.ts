// // //function add
function add(a: string, b: string): string {
	return a + b;
}
const sum = add("10", "20");
console.log("sum =>", sum);

// // //array.length: trả về số lượng phần tử trong mảng.
const arrlength = [1, 2, 3, 4, 5];
console.log(arrlength.length); // 5

// // //array.push(element): thêm phần tử vào cuối mảng.
const arrpush: number[] = [1, 2, 3];
arrpush.push(4);
console.log(arrpush); // [1, 2, 3, 4]

// // //array.pop(): xóa phần tử cuối cùng của mảng và trả về giá trị đã xóa.
const numbers = [1, 4, 9];
const element = numbers.pop();
console.log("number =>", numbers);
console.log("element is : " + element);
//number => [ 1, 4 ]
// element is : 9

// // //array.unshift(element): thêm phần tử vào đầu mảng.
const arr2: string[] = ["orange", "mango", "banana", "sugar"];
const length2 = arr2.unshift("water");
console.log("Returned array is : " + arr2);
console.log("Length of the array is : " + length2);
// Returned array is : water,orange,mango,banana,sugar
// Length of the array is : 5

// // //array.shift(): xóa phần tử đầu tiên của mảng và trả về giá trị đã xóa.
const arr3: number[] = [1, 2, 3, 4, 5];
const shiftedValue: number | undefined = arr3.shift();
console.log(arr3); // [2, 3, 4, 5]
console.log(shiftedValue); // 1

// // //array.indexOf(element): trả về vị trí của phần tử trong mảng hoặc trả về -1 nếu không tìm thấy.
const arr4: number[] = [1, 2, 3, 4, 5];
console.log(arr4.indexOf(3)); // 2
console.log(arr4.indexOf(6)); // -1

// // //array.slice(start, end): cắt mảng và trả về mảng mới từ vị trí start đến vị trí end (không bao gồm end).
const arr5: number[] = [1, 2, 3, 4, 5];
const sliced: number[] = arr5.slice(1, 3);
console.log(sliced); // [2, 3]

// // //array.splice(index, deleteCount, item): xóa một hoặc nhiều phần tử tại vị trí index với số lượng deleteCount và thêm phần tử item.
const arr6: number[] = [1, 2, 3, 4, 5];
arr6.splice(2, 2, 6);
console.log(arr6); // [1, 2, 6, 4, 5]

// // //array.forEach(callback): duyệt qua từng phần tử trong mảng và gọi hàm callback với mỗi phần tử.
const arr7: number[] = [1, 2, 3, 4, 5];
arr7.forEach((element, index) => {
	console.log(`${index}: ${element}`);
});
// // Output:
// // 0: 1
// // 1: 2
// // 2: 3
// // 3: 4
// // 4: 5

// // //array.map(callback): duyệt qua từng phần tử trong mảng, gọi hàm callback với mỗi phần tử và trả về một mảng mới từ kết quả của callback.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newArray1: Array<number> = [].map((num: number) => num * 2);
console.log("newArray1 =>", newArray1);
//Output
//newArray1 => [2,4,6,8]

// //array.filter : dùng để lọc ra các phần tử trong mảng thoả mãn điều kiện nào đó
interface User {
	name: string;
	age: number;
}
const users: Array<User> = [
	{ name: "John", age: 30 },
	{ name: "Jane", age: 25 },
	{ name: "Jim", age: 35 },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const newArray: Array<User> = users.filter((user: User) => user.age >= 30);
console.log(newArray);

// const newArray: Array<User> = users.filter((user: User) => user.age >= 30);
// console.log("new array =>", newArray);
//Output new array => [ { name: 'John', age: 30 },
//     { name: 'Jim', age: 35 }
// ]

// //concat(): dùng để nối 2 hay nhiều mảng với nhau
const array1: string[] = ["a", "b", "c"];
const array2: string[] = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3); // > Array ["a", "b", "c", "d", "e", "f"]
console.log(array1); // > Array ["a", "b", "c"]
console.log(array2); // > Array ["d", "e", "f"]

// //find() : dùng để lọc phần tử trong mảng, tuy nhiên nó sẽ trả về giá trị đầu tiên tìm thấy ở trong mảng hoặc có thể trả về undefined nếu không tìm thấy
const array: number[] = [5, 12, 8, 130, 44];
const found = array.find(function (element) {
	return element > 10;
});
console.log(found); // > 12
console.log(array); // > Array [5, 12, 8, 130, 44]

// //lodash
import * as _ from "lodash";

// Tính tổng của một mảng số
const numbers1: number[] = [1, 2, 3, 4, 5];
const sum1 = _.sum(numbers1);
console.log(sum1); // 15

// Tìm phần tử có tuổi nhỏ nhất trong một mảng các đối tượng
type person = {
	name: string;
	age: number;
};
const people: person[] = [
	{ name: "John", age: 25 },
	{ name: "Jane", age: 30 },
	{ name: "Jim", age: 35 },
];
const youngestPerson = _.minBy(people, "age");
console.log(youngestPerson); // { name: 'John', age: 25 }

// Gom nhóm các phần tử trong một mảng dựa trên một thuộc tính
const animals = [
	{ name: "Lion", type: "Mammal" },
	{ name: "Shark", type: "Fish" },
	{ name: "Turtle", type: "Reptile" },
	{ name: "Eagle", type: "Bird" },
];
const groupedAnimals = _.groupBy(animals, "type");
console.log(groupedAnimals);
/*
{
  Mammal: [{ name: 'Lion', type: 'Mammal' }],
  Fish: [{ name: 'Shark', type: 'Fish' }],
  Reptile: [{ name: 'Turtle', type: 'Reptile' }],
  Bird: [{ name: 'Eagle', type: 'Bird' }]
}
*/

// Lấy các phần tử duy nhất trong một mảng
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(duplicates);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// Sắp xếp một mảng theo thứ tự tăng dần hoặc giảm dần
const sortedNumbers = _.sortBy(numbers);
console.log(sortedNumbers); // [1, 2, 3, 4, 5]
const reversedSortedNumbers = _.sortBy(numbers).reverse();
console.log(reversedSortedNumbers); // [5, 4, 3, 2, 1]
