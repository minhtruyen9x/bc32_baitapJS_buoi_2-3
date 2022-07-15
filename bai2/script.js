//Tính Giá Trị Trung Bình

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Giá trị 5 số thực
 * - 
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button tính toán
 * - Sau khi button được click
 * - Lần lượt tạo các biến value1,value2,value3,value4,value5 lưu trữ giá trị người dùng nhập vào truy xuất từ các thẻ input.
 * - Tạo biến average = (value1 + value2 + value3 + value4 + value5)/5
 * - get thẻ output bằng id
 * - Thay đổi nội dung the output lấy được bằng average;
 * 
 * 
 * =========Đầu ra===========
 * - Giá trị biến average.
 * 
 * 
 */

document.getElementById('button').onclick = function () {
    var value1 = document.getElementById('input1').value*1;
    var value2 = document.getElementById('input2').value*1;
    var value3 = document.getElementById('input3').value*1;
    var value4 = document.getElementById('input4').value*1;
    var value5 = document.getElementById('input5').value*1;

    var average = (value1 + value2 + value3 + value4 + value5)/5;

    var output = document.getElementById('output');
    output.innerText = average.toFixed(3) ;
}