
let signupUrl = "http://localhost:8081/user/signup";

function matchPassword(){

    const pwd = document.getElementById("sign_pwd").value;
    const cpwd = document.getElementById("cpwd").value;

    if(pwd !=  cpwd){
        alert("Password does not match.");
        document.getElementById("sign_pwd").focus();
        return false;
    }
}

function signupuser(){

    const uname = document.getElementById("sign_uname").value;
    const pwd = document.getElementById("sign_pwd").value;

    console.log(uname+"   "+pwd);
    let user = {
        "userName": uname,
        "password": pwd
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST",signupUrl,true);

    xhttp.onreadystatechange = function(){
        if(this.status == 200){
            console.log(this.responseText);
            console.log("Response printed... Awaiting dashboard page");
        }
    }
    xhttp.setRequestHeader("Content-Type","application/JSON");
    xhttp.send(JSON.stringify(user));
}


function loginuser(){
    //     https://drive.google.com/file/d/1-obUGKevXFL8Dy5MWvuRBsQ9WnYHYOtC/view?usp=drivesdk
}