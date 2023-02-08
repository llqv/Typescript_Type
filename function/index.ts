// // //function
// function add(a: string, b: string): string {
// 	return a + b;
// }
// const sum = add("10", "20");
// console.log("sum =>", sum);

// // //array.length: trả về số lượng phần tử trong mảng.
// const arrlength = [1, 2, 3, 4, 5];
// console.log(arrlength.length); // 5

// // //array.push(element): thêm phần tử vào cuối mảng.
// const arrpush: number[] = [1, 2, 3];
// arrpush.push(4);
// console.log(arr); // [1, 2, 3, 4]

// // //array.pop(): xóa phần tử cuối cùng của mảng và trả về giá trị đã xóa.
// let arr: number[] = [1, 2, 3];
// const popped: number = arr.pop();
// console.log(arr); // [1, 2]
// console.log(popped); // 3

// // //array.unshift(element): thêm phần tử vào đầu mảng.
// let arr: number[] = [1, 2, 3];
// arr.unshift(0);
// console.log(arr); // [0, 1, 2, 3]

// // //array.shift(): xóa phần tử đầu tiên của mảng và trả về giá trị đã xóa.
// let arr: number[] = [1, 2, 3];
// const shifted: number = arr.shift();
// console.log(arr); // [2, 3]
// console.log(shifted); // 1

// // //array.indexOf(element): trả về vị trí của phần tử trong mảng hoặc trả về -1 nếu không tìm thấy.
// let arr: number[] = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3)); // 2
// console.log(arr.indexOf(6)); // -1

// // //array.slice(start, end): cắt mảng và trả về mảng mới từ vị trí start đến vị trí end (không bao gồm end).
// let arr: number[] = [1, 2, 3, 4, 5];
// const sliced: number[] = arr.slice(1, 3);
// console.log(sliced); // [2, 3]

// // //array.splice(index, deleteCount, item): xóa một hoặc nhiều phần tử tại vị trí index với số lượng deleteCount và thêm phần tử item.
// let arr: number[] = [1, 2, 3, 4, 5];
// arr.splice(2, 1, 6);
// console.log(arr); // [1, 2, 6, 4, 5]

// // //array.forEach(callback): duyệt qua từng phần tử trong mảng và gọi hàm callback với mỗi phần tử.
// let arr: number[] = [1, 2, 3, 4, 5];
// arr.forEach((element, index) => {
// 	console.log(`${index}: ${element}`);
// });
// // Output:
// // 0: 1
// // 1: 2
// // 2: 3
// // 3: 4
// // 4: 5

// // //array.map(callback): duyệt qua từng phần tử trong mảng, gọi hàm callback với mỗi phần tử và trả về một mảng mới từ kết quả của callback.
// let arr: number[] = [1, 2, 3, 4, 5];
// const doubled: number[] = arr.map((x) => x * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
