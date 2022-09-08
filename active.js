var a = prompt("Tài Khoản");
var b = prompt("Mật Khẩu");

if((a=="Tran Thi My Duyen" )&&( b=="09092003" || b=="992003") || b=="09/09/2003" || b=="9/9/2003") {
    window.location.href = "start.html"
} else {
    alert("Your Information is wrong");
    window.location.href = "index.html"
}
