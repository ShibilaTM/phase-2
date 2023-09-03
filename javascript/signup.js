const form = document.querySelector("form")
var email = document.getElementById("email");
var err1 = document.getElementById("err1");
var pwd = document.getElementById("pwd");
var pass1 = document.getElementById("pass1");
var copwd = document.getElementById("copwd");
var copass1 = document.getElementById("copass1");
var phone = document.getElementById("phone");
var mob1 = document.getElementById("mob1");

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
        pass1.innerText = "password include min. 8 characters,atleast one uppercase,one lowercase and one number";
        pass1.style.color ="red";
        pass1.style.fontSize = "13px";
        pwd.style.border = "1px solid red";
        return false;
    }
}



// confirm password
function success() {
    if (pwd.value === copwd.value) {
        copwd.style.border= "1px solid green";
        copass1.innerText = "correct password";
        copass1.style.color = "green";
        return true;
    } else {
        copwd.style.border= "1px solid red";
        copass1.innerText = "Passwords do not match";
        copass1.style.color = "red";
        copass1.style.fontSize = "13px";
        return false;
    }
}

// phone number
function mynNumber(){
    var phoneExp = /^(?:\d{10}|(\d{3}[-.\s]){2}\d{4})$/
    if(phoneExp.test(phone.value)){
        mob1.innerText = "Phone number is valid";
        mob1.style.color="green";
        mob1.style.fontSize = "13px";
        phone.style.border = "1px solid green";
        return true;
    }
    else{
        mob1.innerText = "Not a valid number";
        mob1.style.color="red";
        mob1.style.fontSize = "13px";
        phone.style.border = "1px solid red";
        return false;
    }

}





// hiding the comments

function change(){
    pwd.style.border = "1px solid grey"
    email.style.border = "1px solid grey";
    copwd.style.border = "1px solid grey";
    phone.style.border = "1px solid grey";

}
function hide(){
    pwd.style.border = "1px solid grey";
    pass1.innerText = "";
    email.style.border = "1px solid grey";
    err1.innerText = "";
    copwd.style.border = "1px solid grey";
    copass1.innerText = "";
    phone.style.border = "1px solid grey";
    mob1.innerText = "";
}








//to navigate

function checkValidation() {
    if (validate() && display()&& success() && mynNumber()) {
        // Both email and password are valid, allow navigation
        return true;
    } else {
        // Email or password is invalid, prevent navigation
        return false;
    }
}
