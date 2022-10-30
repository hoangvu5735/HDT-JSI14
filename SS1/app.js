///////// Array: Mảng, danh sách
// Cú pháp khai báo mảng: 
//// C1: 
// let arr = []; // xong cú pháp khai báo mảng không giá trị
// let arr2 = ["ba chỉ", "trứng vịt lộn"] // khai báo mảng có 2 phần tử
// console.log("arr2: ", arr2);
//// method mảng: push, pop, splice




///////// Object:
// let obj = {
//   kind: "dog",
//   legs: 4,
//   bark: "Gâu Gâu"
// }


// let Nguoi = {
//   name: "Nguyễn Văn A",
//   age: 30,
//   address: "Hà Nội",
//   cccd: "0123456789",
// }

// //// In ra được địa chỉ của người
// console.log("In ra địa chỉ người: ", Nguoi.address);



//////////// let & var : Scope

// {
//   {
//     {
//       let vietnam = "Viet Nam"
//       console.log("vietnam: ", vietnam);

//       var vietnamvar = "Việt Nam Var"
//     }
//     // console.log("vi  etnam tại Đông Nam Á: ", vietnam); // in ra gì?
//   }
// }


// console.log(vietnamvar); // in ra gì?


/////////// 
/*
Đề bài: Một nhà hàng đang cần lập trình về xử lý menu món ăn, chúng ta đóng vai trò là người 
quản lý menu và sẽ thêm, bớt, sửa, xóa các món ăn trong menu với cú pháp: C,R,U,D
Kiểm tra người dùng nhập vào C,R,U,D tương ứng với các yêu cầu sau:
1. C: Tạo thêm món ăn mới trong menu
2. R: In ra menu trên màn hình console
3. U: Update món ăn mới mà người dùng nhập vào
4. D: Delete món ăn
VD: update: đổi món suon nuong => dau xao
B1: Nhập tên món ăn muốn đổi => Nhập tên món ăn mới
output: ["dau xao", "luon ngong", "dui heo"]
VD: Delete: Nhập tên món muốn xóa => in ra màn hình menu đã xóa món đó
*/
let menu = ["suon nuong", "luon ngong", "dui heo"];