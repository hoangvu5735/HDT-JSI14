// Nơi code JS

//////// Biến: dùng để  làm gì?: Nơi lưu trữ dữ liệu
/// Khai báo biến: let, var, const (let/var: dùng để khai báo biến thường, const: khai báo hằng số)


/*
Kiểu dữ liệu:
1. Number: Số: 1,2,3,4
2. String: Chữ< "", '', ``
3. Boolean: true/false: 1<2, 1>2
4. Object: Đối tượng: {name: "Huy Bình", age: 14}
5. null: Rỗng
6. undefined: Không xác định (khi khai báo biến nhưng không gán giá trị)
*/


/*
Toán tử:
1. Toán tử gán: =
VD: let i = 10;
2. Toán tử số học: +, - , *, /, %
VD: let a = 1+1;
3. Toán tử so sánh: <, >, <=, >=, ==, ===
4. Toán tử 3 ngôi: (điều kiện)? lệnh 1: lệnh 2
VD:
console.log(
  (1 > 2) ? "Đúng" : "Sai"
); // => Sai
5. Toán tử logic: &&, ||
&&: Công dụng dùng để kiểm tra kết quả trả về tất cả đều phải đúng => Sử dụng để kiểm tra các điều kiện đúng
VD: (1<2 &&  2<3) => true
    true     true
VD: (1<2 && 10<11 && 2>3) => false
    true     true    false
||: Dùng để chọn ra 1 trường hợp đúng trong số các trường hợp sai
VD: (2<1 || 3<2 || 1<2) => đúng
*/


/*
Mô tả về phép toán: /, %
/: Chia bình thường
%: Chia lấy số dư
*/
// console.log(4 / 3); // 1.33 // 1
// console.log(3 / 4); // 0.75 // 0.75

////// Chia lấy số dư
// console.log(4 % 3); // 1 
// console.log(3 % 4); // 3




////// VD về toán tử so sánh: 
// let a = 1;
// let b = "1";
// console.log(a == b);// true // true
// console.log(a === b);// false // false
/*
==: So sánh tương đối - hiểu là chỉ so sánh về giá trị
===: So sánh tuyệt đối - hiểu là so sánh cả về Giá trị & Kiểu dữ liệu
*/


/*
if(điều kiện){
  Câu lệnh 1
}
else{
  Câu lệnh 2
}
if(điều kiện){
  Câu lệnh 1
}
else if(điều kiện 2){
....
}
else if(điều kiện 3){
}
else{
  Câu lệnh 2
}
*/
// if (1 > 2) {
//   console.log("In ra if");
// }
// else {
//   console.log("In ra else");
// }

// let num = 7;
// if (num < 7) {
//   console.log("Số này nhỏ hơn 7");
// }
// else if (num === 7) {
//   console.log("Số này bằng 7");
// }

// else {
//   console.log("Số này lớn hơn 7");
// }


/*
Có mấy vòng lặp cơ bản: 3
1. while
2. do while
3. For
*/

/////// Đề bài: In ra số từ 1 -> 10
// let i = 1;
// while (i <= 10) {
//   console.log(i);// 1,2,3,4, ...9,10
//   i = i + 1;//2, 3,4,....10,11
// }
// console.log(i, "giá trị của i sau vòng lặp while là");// 11

/*
while(điều kiện){
  ....
  *lưu ý: sau mỗi lần lặp => nên có ít nhất 1 giá trị nào đó thay đổi
}
*
*/
////// do while:
// let i = 1
// do {
//   console.log(i);// 1,2
//   i = i + 1;//2,3
// }
// while (i <= 10);

////=> While: KTĐK => Lặp, do_while: Lặp => KTĐK

//// Vòng lặp for
/*
for(box1 ;box2 ; box3){
lệnh lặp
}
box1: Giá trị đầu vào (chỉ thực hiện duy nhất lần lặp đầu tiên)
box2: Điều kiện lặp
box3: thực hiện câu lệnh cuối cùng khi kết thúc mỗi lần lặp
*/

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(i);// 1,2,3,.... 10
// }



/*
Đề bài: Xây dựng chương trình kiểm tra và in ra những năm nhuận từ năm 2000 -> 2022
Biết rằng
- Năm nhuận là năm: Năm chia hết cho 4 nhưng không chia hết cho 100. (nam%4==0 && nam%100 != 0)
- Hoặc năm chia hết cho 400.
for(let i = 2000;i<2023;i++){
    if(i%4 == 0 && i%100 !== 0){
        console.log("nam"+(i)+" la nam nhuan")
        
    }
    else if(i%400 == 0){
        console.log("nam" +(i)+"nay la nam nhuan")
    }   
    else{
    }
}
*/

/*
Mảng trong lập trình: Danh sách
Cú pháp khai báo
let arr = [];
*/

let arr = []; // Khai báo mảng rỗng

/// Thêm 1 giá trị vào mảng: push(...)
arr.push(123);
arr.push(456);
arr.push(`Hello`, "Hi");

//// Gọi danh sach:  console.log();

//// Update giá trị cũ => giá trị mới (Đổi Hi -> How are you)
arr[3] = 'How are you'


///// Delete giá trị trong mảng: arr.splice(vị trí phần tử mảng, xóa mấy phần từ, thêm phần tử mảng)
arr.splice(1, 1);



//// Tìm vị trí phần tử trong mảng: indexOf
console.log(
  arr.indexOf("How are you")
);


//// Hàm find
console.log(
  arr.find(x => x > 1)
);


let arr1 = [1, 2, 4, 5, 6, 8, 9, 10];
/// Hàm filter
console.log(
  arr1.filter(x => x % 2 == 0)
  // Kết quả trả về là 1 mảng khác
);