//Tính Tổng 2 ký số

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Số có 2 chữ số
 * -
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button tính toán
 * - Sau khi button được click
 * - Tạo biến number lữu trữ số có 2 chữ số lấy từ thẻ input1
 * - Tạo biến donVi = number%10 xử lý và lưu trữ ký số hàng đơn vị
 * - Tạo biến hangChuc = Math.floor(number/10) xử lý và lưu trữ ký số hàng chục
 * - Tạo biến sum = donVi + hangChuc tổng 2 ký số
 * - get thẻ output bằng id
 * - Thay đổi nội dung the output lấy được bằng sum;
 * =========Đầu ra===========
 * - Xuất ra Tổng 2 ký số
 * 
 * 
 */

//Xuất dữ liệu
document.getElementById('button').onclick = function () {
    var number = document.getElementById('input1').value*1;
    var donVi = number%10;
    var hangChuc = Math.floor(number/10);
    var sum = donVi + hangChuc;

    var output = document.getElementById('output');
    output.innerText = sum;
}
