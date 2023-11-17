
let eye = document.getElementById("eyeicon")
let password = document.getElementById("password")
eyeicon.onclick = function(){
    if(password.type == "password"){
        password.type ="text"
        eyeicon.src ="download.png"
    }else{
        password.type ="password";
       
    }
}