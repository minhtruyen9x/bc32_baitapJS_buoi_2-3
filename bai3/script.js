//Quy Đổi Tiền

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Số tiền đô $ người dùng nhập vào
 * -
 * 
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button tính toán
 * - Sau khi button được click
 * - Tạo biến vndPer$ lưu trữ giá trị quy đổi tương ứng 23.500 VND cho 1 $
 * - Tạo biến money$ lưu trữ số $ người dùng nhập vào lấy từ thẻ input1
 * - Tạo biến moneyVND = vndPer$*money$ xử lý và lưu trữ tiền quy đổi
 * - get thẻ output bằng id
 * - Thay đổi nội dung the output lấy được bằng salary;
 * 
 * =========Đầu ra===========
 * - Xuất ra số tiền $ đã dược quy đổi
 * 
 * 
 */



document.getElementById('button').onclick = function () {
    var currencyFormat = new Intl.NumberFormat('vn-VN');
    var vndPer$ = 23500;
    var money$ = document.getElementById('input1').value*1;
    var moneyVND = vndPer$*money$;

    var output = document.getElementById('output');
    output.innerText = currencyFormat.format(moneyVND) + 'VND';
}
