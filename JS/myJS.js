var sub = document.getElementById("sub");
var mail_pattern =/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
var passChek = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{6,20}$/;
sub.onclick = function () {
    var mail = document.getElementById("mail").value;
    if(mail_pattern.test(mail) == false){
        alert("Введен не верный эмейл")
    }



    var pass = document.getElementById("pass").value;
    if (passChek.test(pass) == false){
        alert("Введите коректный пароль 6-20 сиволов")
    }
};



