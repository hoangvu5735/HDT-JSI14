/*
Buổi 2:
KDL nguyên thủy:
1. Number: Số
2. String: chuỗi
3. null: rỗng
4. undefined: Không xác định
5. boolean: true/false
6. Object: Đối tượng
Toán tử:
1. Gán: =
2. So sánh: <,>,<=,>=, ==, ===, !=, !==
3. logic: && (true && true), || (false || false)
4. số học: +,-,*,/,%
5. 3 ngôi:
*/

// let a;
// console.log(a);

// console.log(
//   3 % 5
// );// => 3 


//// VD về toán tử logic
// console.log(
//   2 > 2 && 3 > 2 && 4 > 2
// );/// => false


// console.log(
//   3 > 4 || 5 < 4 || 10 > 9
// ); // => true



/////// Cú pháp liên quan tới mảng: 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
map: Thực hiện hành động với từng phần tử của mảng => 1 mảng mới đã thực hiện xong hành động với toàn mảng cũ
- map chỉ dành cho KDL mảng.
*/
//// Bài toán *2 toàn bộ phần tử mảng arr và in ra kết quả 
// let arr1 = arr.map(item => item * 2) // [2,4,...20]
// console.log(arr1);

// /// In ra mảng kết quả là số dư của từng phần tử mảng arr khi  chia với 5.


/*
Filter: Sử dụng để lọc các phần tử sao cho thỏa mãn điều kiện => 1 mảng mới thỏa mãn điều kiện đã lọc
*/

//// Bài toán: Lọc ra các phần tử là số lẻ trong mảng arr và in ra trên màn hình console

let danhsach = [
  {
    name: "nho",
    value: 100
  },
  {
    name: "dưa hấu",
    value: 5
  },
  {
    name: "xoài",
    value: 20
  },
]

/*
1. in ra tên của từng quả
2. In ra tên quả nào có số lượng quả > 5
3. In ra tên quả nào có tên nhiều hơn 1 ký tự
*/


/// Câu 1:
// console.log(
//   danhsach.map(item => item.name)
// );

// // Câu 2: 
// console.log(
//   (danhsach.filter(item => item.value > 5)).map(item => item.name)
// );

// // Câu 3: 
// console.log(
//   danhsach.filter(item => item.name.indexOf(" ") > 0).map(item => item.name)
//   /////                  kq trả về là vị trí phần tử đầu tiên tìm thấy
// );

/*
- LocalStorage: Nơi lưu trữ dữ liệu cục bộ tại Browser
+ localStorage cho phép lưu trữ tối đa: 5MG
+ Lưu ý:
bit, byte, kB, MB, GB, TB, PB, ...
1 byte = 8 bit
1 kB = 1024 byte
1 Mb = 1024 Kb
tương tự với các đơn vị đằng sau.
- LS chỉ lưu trữ string => Dữ liệu muốn lưu trên LS buộc phải Ép kiểu về KDL String
- LS tồn tại vĩnh viễn trên trình duyệt trừ khi người dùng clear nó đi
*/

// Kiểu dữ liệu đối tượng
// let obj = {
//   name: "Hiếu"
// }


////// Cú pháp khai báo khóa và giá trị lưu trữ trên LS
/*
C,R,U,D:
1. Create
2. Read
3. Update
4. Delete
*/
///// VD: Lưu trữ khóa 
// C1: 
// localStorage.setItem("name", "Huy Bình");

// // C2: 
// localStorage.teacher = "Hiếu"
///// VD: lưu 1 mảng trên LS?
// let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// localStorage.setItem("arr", JSON.stringify(mang));
//                                        ép kiểu về chuỗi




/// Read: In ra được toàn bộ phần tử đã lưu trên LS
// console.log(
//   localStorage.getItem("teacher")
// );


//// Lấy bất cứ kiểu dữ liệu từ khóa trên LS
// console.log(
//   JSON.parse(localStorage.getItem("arr"))
// );


/// Update: 
// localStorage.teacher = "Thầy Hiếu"


// /// Delete khóa
// localStorage.removeItem("teacher")


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
Note: Lưu ý: tất cả dữ liệu thao tác đều phải lưu lại trên LocalStorage (C,R,U,D)
*/
let menu;
if (localStorage.menu) {
  menu = JSON.parse(localStorage.getItem("menu"));
}
else {
  localStorage.menu = JSON.stringify(["thịt lợn", "cơm rang"])
}

function thongBao() {

  let input = prompt("Mời người dùng nhập vào C,R,U,D")
  console.log("input: ", input);// C,R,R,D
  if (input == "c") {
    let newFood = prompt("Mời người dùng nhập vào món ăn thêm vào menu");
    let menu = JSON.parse(localStorage.getItem("menu"))
    menu.push(newFood)
    localStorage.menu = JSON.stringify(menu)
  }
  else {
    alert("Sai cú pháp nhập")
  }
}


// VD