var a = prompt("Nhập Vào Họ và Tên Của Bạn");
var b = prompt("Nhập vào ngày tháng năm sinh của Bạn");

if(a=="Trần Thị Mỹ Duyên" && b=="09/09/2003") {
    window.location.href = "index.html"
} else {
    alert("Your Information is wrong");
    window.location.href = "fact.html"
}