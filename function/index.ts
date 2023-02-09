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
const arr2 = ["orange", "mango", "banana", "sugar"];
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
const arr8: number[] = [1, 2, 3, 4, 5];
const doubled: number[] = arr8.map((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// //array.filter : dùng để lọc ra các phần tử trong mảng thoả mãn điều kiện nào đó
const people = [
	{ name: "aaron", age: 65 },
	{ name: "beth", age: 2 },
	{ name: "cara", age: 13 },
	{ name: "daniel", age: 3 },
	{ name: "ella", age: 25 },
	{ name: "fin", age: 1 },
	{ name: "george", age: 43 },
];
const toddlers = people.filter((person) => person.age > 3);
console.log(toddlers);
// [
// 	{ name: 'aaron', age: 65 },
// 	{ name: 'cara', age: 13 },
// 	{ name: 'ella', age: 25 },
// 	{ name: 'george', age: 43 }
//   ]
// //concat(): dùng để nối 2 hay nhiều mảng với nhau
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3); // > Array ["a", "b", "c", "d", "e", "f"]
console.log(array1); // > Array ["a", "b", "c"]
console.log(array2); // > Array ["d", "e", "f"]

// //find() : dùng để lọc phần tử trong mảng, tuy nhiên nó sẽ trả về giá trị đầu tiên tìm thấy ở trong mảng hoặc có thể trả về undefined nếu không tìm thấy
const array = [5, 12, 8, 130, 44];
const found = array.find(function (element) {
	return element > 10;
});
console.log(found); // > 12
console.log(array); // > Array [5, 12, 8, 130, 44]
