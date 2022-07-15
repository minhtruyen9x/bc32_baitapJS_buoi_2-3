//Tính diện tích chu vi hình chữ nhật

/**
 * Mô hình 3 khối
 * 
 * =======Đầu vào=======
 * - Chiều dài hình chữ nhật
 * - Chiều rộng hình chữ nhật
 * -
 * ========Xử lý==========
 * - Lắng nghe sự kiện click button tính toán
 * - Sau khi button được click
 * - Tạo biến lengths lưu trữ giá trị người dùng nhập cho chiều dài hcn
 * - Tạo biến width lưu trữ giá trị người dùng nhập cho chiều rộng hcn
 * - Tạo biến perimeter = (lengths + width)*2 xử lý và lưu trữ chu vi hcn
 * - Tạo biến area = length*width xử lý và lưu trữ diện tích hcn
 * - get thẻ output bằng id
 * - Thay đổi nội dung thẻ output lấy được bằng perimeter và area;
 * 
 * =========Đầu ra===========
 * - Xuất ra 
 * giá trị chu vi và diện tích hcn
 * 
 * 
 */

document.getElementById('button').onclick = function () {
    var lengths = document.getElementById('input1').value*1;
    var width = document.getElementById('input2').value*1;
    var perimeter = (lengths + width)*2;
    var area = lengths*width;;

    var output = document.getElementById('output');
    var text ='';
    text+='<p class="mb-0 mt-2 ml-sm-5">Diện Tích: '+area+'</p>';
    text+='<p class="my-0 ml-sm-5">Chu vi: '+perimeter+'</p>'
    output.innerHTML = text;
}