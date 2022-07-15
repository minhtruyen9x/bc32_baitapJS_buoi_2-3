//TÍNH TIỀN LƯƠNG NHÂN VIÊN

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Tiền lương cho 1 ngày làm việc của nhân viên
 * - Số ngày làm việc
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button tính toán
 * - Sau khi button được click
 * - Tạo biến salaryPerDay lưu trữ giá trị lương cho 1 ngày nhận được trong thẻ input1
 * - Tạo biến workingDays lưu trữ số ngày làm việc của nhân viên nhận được trong thẻ input2
 * - Tạo biến salary = salaryPerDay*workingDays
 * - get thẻ output bằng id
 * - Thay đổi nội dung the output lấy được bằng salary;
 * 
 * =========Đầu ra===========
 * - Xuất tổng tiền lương của nhân viên.
 * 
 * 
 */


document.getElementById('button').onclick = function () {
    var currencyFormat = new Intl.NumberFormat('vn-VN');
    var salaryPerDay = document.getElementById('input1').value*1;
    var workingDays = document.getElementById('input2').value*1;

    var salary = salaryPerDay*workingDays;

    var output = document.getElementById('output');
    output.innerText = currencyFormat.format(salary) + 'VND';
}
