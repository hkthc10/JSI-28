// - Tạo 1 đối tượng User bao gồm các thuộc tính: fullname, enail, password

// const user = {
//   fullname: "Trần Văn Tiến",
//   email: "tien@gmail.com",
//   password: '123' 
// }
// user.fullname = "Trần Tiến"

// let age = 15
// console.log("Trước khi ghi đè", age);

// age = 51
// console.log("Sau khi ghi đè", age);

// console.log(user);

const numberList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Hàm ES6: map(), filter(), find()

// - Hàm map: Duyệt qua mảng đã chọn, có thể thay đổi giá trị của phần tử, sau đó trả về 1 mảng mới

// Cú pháp: tên_mảng.map()

let newnumberList = numberList.map(function (number) {
    console.log(number);

    return number + 3;
})

console.log(newnumberList);

// Hàm filter: llọc ra những phần tử thỏa mãn điều kiện

let filterNumberList = numberList.filter(function (number) {
    return number >10
})

console.log(filterNumberList);

let findNumberList = numberList.find(function (number) {
    return number >10
})

console.log(findNumberList);

// Nhiệm vụ về nhà: 
// - Tìm hiểu về Arrow function
// - Lập trình hướng đối tượng

let val = ""

val = (iner) =>  "Hello" + " " + iner;   


document.getElementById("demo").innerHTML = val("Universe!");