const form = document.querySelector("form")
var email = document.getElementById("email");
var err1 = document.getElementById("err1");
var pwd = document.getElementById("pwd");
var pass1 = document.getElementById("pass1");

function validate(){
    console.log("button clicked");
    var emailExp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
    if(emailExp.test(email.value)){
        err1.innerText = "email is valid";
        err1.style.color="green";
        err1.style.fontSize = "13px";
        email.style.border = "1px solid grey";
        return true;
    }
    else{
        err1.innerText = "email is invalid";
        err1.style.color ="red";
        email.style.border = "1px solid red";
        return false;
    }
}

 
// password

function display(){
    console.log("button clicked");
    var passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
    var passExp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/
    if(passExp.test(pwd.value)){
        pass1.innerText = "password is valid";
        pass1.style.color="green";
        pwd.style.border = "1px solid green";
        return true;
    }
   
    else if(passExp1.test(pwd.value)){
        pass1.innerText = "password is medium";
        pass1.style.color ="orange";
        pwd.style.border = "1px solid orange";
        return false;
    }
    else{
        pass1.innerText = "password is weak";
        pass1.style.color ="red";
        pass1.style.fontSize = "13px";
        pwd.style.border = "1px solid red";
        return false;
    }
}
function change(){
    pwd.style.border = "1px solid grey"
    email.style.border = "1px solid grey";
}
function hide(){
    pwd.style.border = "1px solid grey";
    pass1.innerText = "";
    email.style.border = "1px solid grey";
    err1.innerText = "";
}

//to navigate

function checkValidation() {
    if (validate() && display()) {
        // Both email and password are valid, allow navigation
        return true;
    } else {
        // Email or password is invalid, prevent navigation
        return false;
    }
}