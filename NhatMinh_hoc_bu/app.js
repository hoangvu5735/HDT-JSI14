////// Thực hành với localStorage
/*
- Khái niệm: lưu trữ bộ nhớ cục bộ => browser
- Vai trò:
+ Nó là Javascript thuần
+ Tối đa: 5MB (bit, byte, kb, MB, GB,TB, PT ) => Chủ yếu là String
1byte = 8 bit
1kb = 1024 byte
1MB = 1024 kb
...
+ Không dùng LS để lưu trữ thông tin nhạy cảm
- Nhược điểm:
+ Chỉ truy câp cục bộ
+ LS không thể lưu trữ các loại data phức tạp (Number, undefinded, null,...) => only "string"
+ Bảo mật rất kém => nó không có phương pháp gì để bảo vệ dữ liệu
SessionStorage:
- LS: Lữu trữ dữ liệu vĩnh viễn cho tới khi người dùng xóa dữ liệu
- SS: Lưu trữ dữ liệu tạm thời cho tới khi đóng trình duyệt
+ SS lữu trữ riêng biệt cho từng tab khác nhau => các tab không sử dụng chung dữ liệu
*/


////// Thực hành thao tác với localStorage
//// Kiểm tra xem trình duyệt có LS hay không?
// if (typeof (Storage) !== "undefined") {
//   alert("Có hỗ trợ LS");
// }
// else {
//   alert("Không hỗ trợ LS")
// }



////// Thêm dữ liệu vào LS: setItem()
// C1
// localStorage.setItem("name", "Phạm Hoàng Nhật Minh"); // => Lưu thành công trên LS

// // C2:
// localStorage.teacher = "Nguyễn Trung Hiếu"
// localStorage.teacher = "Hiếu"



// /////// Lấy dữ liệu từ LocalStorage về: 
// console.log(
//   localStorage.getItem("name")
// );



// ///// Kiểm tra số lượng LocalStorage đã lưu trữ trên trinh duyệt
// console.log(
//   localStorage.length
// );



// //// Xóa dữ liệu tong LS
// // localStorage.removeItem("teacher")


// //// Xóa toàn bộ dữ liệu trong LS
// localStorage.clear()


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