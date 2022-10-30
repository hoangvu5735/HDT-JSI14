////// Chữa BTVN



/*
Buổi trước: Ôn tập về Javascript
1. KDL
2. Toán tử
3. Câu điều kiện
4. Loop
5. Array
*/


//// Object: 
// let VietDuc = {
//   name: "Việt Đức",
//   age: 17,
//   address: "RC"
// }

// console.log(VietDuc);

/// Khai báo 1 đối tượng máy tính
// let Laptop = {
//   cpu: "m1",
//   ram: "16gb",
//   monitor: "13inch",
//   price: "30tr",
// }


/////// Thay đổi giá trị trong Object
// Laptop.cpu = "i9 9750h"
// Laptop.card = "RTX 3080ti"


/// C,R,U,D: 


//// Update: gán lại giá trị cho khóa

/// Delete: Xóa khóa monitor trong đối tượng

// delete Laptop.monitor

// let BaoLam = {
//   name: "Bảo Lâm",
//   address: ['Hà Nội', "HCM", "Đà Nẵng"],
//   dog: {
//     name: "bon",
//     age: 1
//   }
// }





/////// Spread Syntax

// let obj = {
//   name: "john",
//   age: 24,
//   address: "22 jump Street",
//   job: "Dev"
// }

// let obj2 = {
//   name: "Hiếu",
//   age: 24,
//   address: "Hà Nội"
// }

// ///// Gộp Đối tượng 1 và đối tượng 2 => obj3
// let obj3 = Object.assign(obj, obj2);

// console.log("obj3: ", obj3);
// ====> Object mới sinh ra sẽ có tất cả các thuộc tính từ đối tượng khác




///// Spread Syntax sử dụng với hàm
// function sum(){

// }

// let sum = (x, y, z) => {
//   return x + y + z;
// }

// // console.log(
// //   sum(1, 2, 3, 4)
// // ); // => NHẬN 3 BIẾN tổng bằng: 6

// let number = [1, 2, 3, 4]
// console.log(
//   sum(...number)
// );// Lấy toàn bộ từng phần tử của mảng và gán vào tham số trong hàm



//////// Copy mảng
// let arr1 = [1, 2, 3, 4];
// ///// Copy mảng 1 vào biến arr2
// let arr2 = [...arr1];
// console.log("arr2: ", arr2);



/////// copy Đối tượng
// let Nguoi = {
//   name: "John",
//   age: 25
// }

// let copy_Nguoi = { ...Nguoi }
// console.log("copy_Nguoi: ", copy_Nguoi);




// ////// Nối Array
// let arr1 = ["abc", "Gaming", "123"];
// let arr2 = ["snake", "cat", 'dog'];

// //// => Nối 2 mảng này với nhau
// // let arr1_2 = arr1.concat(arr2)
// // console.log("arr1_2: ", arr1_2);

// let arr1_2 = [...arr1, ...arr2];
// console.log("arr1_2: ", arr1_2);



////// Giới thiệu về map

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //// Tăng từng phần tử của mảng lên gấp 2 lần và in ra nó
// //// C1: Dùng vòng lặp thông thường
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] * 2;
// }
// console.log("mảng arr sau khi X2 phần tử là: ", arr);

//// Cách 2: dùng map
// let arrMap = arr.map((item) => {
//   return item = item * 2;
// })

// console.log(arrMap);


/*
- Map là 1 hàm dùng để thực hiện 1 hành động với từng phần tử  của mảng
và kết quả trả về là 1 mảng mới hành động hàm đó
*/


////// Ví dụ về filter: 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// /// Lọc và in ra những số chẵn trong mảng
// // let arrFilter = arr.filter(item => item % 2 == 0)
// let arrFilter = arr.filter((item) => {
//   return item % 2 == 0 // lọc số chẵn
// })

// console.log("arrFilter: ", arrFilter);


let animals = [
    {
      name: "cat",
      size: "small",
      weight: 5
    },
    {
      name: "dog",
      size: "small",
      weight: 7
    },
    {
      name: "elphant",
      size: "big",
      weight: 5000
    },
  ]
  /*
  Yêu cầu đề bài: 
  1. In ra tên từng con vật trong mảng
  2. Lấy ra tên những con vật nào cân nặng weight < 1000
  3. Lọc ra những con vật nào có size "small"
  3. Lọc ra những con vật nào có size "big"
  */