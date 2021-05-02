var userNameInput = document.getElementById("UserName");
var userPasswordInput = document.getElementById("password");
var invalidPassword = document.getElementById("invalidPassword");
var invalidUserName = document.getElementById("invalidUserName");
var loginBtn = document.getElementById("logInBtn");
var signUp = document.getElementById("signUp");
var register=document.getElementById("register");
var openLogForm=document.getElementById("login");
var loggingForm=document.getElementById("loggingForm");
var logFormClose=document.getElementById("closeLog");
var welcomeMessage=document.getElementById("welcome");

var regForm=document.getElementById("registerForm");
var firstName = document.getElementById("firstName");
var firstNameInvalid = document.getElementById("invalidFirstName");
var lastName = document.getElementById("lastName");
var lastNameInvalid = document.getElementById("invalidLastName");
var email = document.getElementById("email");
var emptyEmail = document.getElementById("entEmail");
var userInvalidEmail = document.getElementById("invalidEmail");
var regPassword = document.getElementById("regPassword");
var regUserName = document.getElementById("regUserName");
var invalidRegUserName = document.getElementById("alreadyTaken");
var emptyRegUserName = document.getElementById("entUserName");
var invalidRegPass = document.getElementById("invalidRegPass");
var retypePassword = document.getElementById("retypePassword");
var retypePassNotMatch= document.getElementById("passNotMatch");
var userGenderMale = document.getElementById("genderMale");
var userGenderFemale = document.getElementById("genderFemale");
var age = document.getElementById("age");
var regesterationBtn = document.getElementById("registerBtn");
var closeRegForm=document.getElementById("closeReg");

var allH6= document.getElementsByTagName("h6");
for (var i=0; i<allH6.length;i++)
{
    allH6[i].classList.remove("text-danger");
}

var checkEmail;
var checkPassword;
var checkFirstName;
var checkLastName;
var checkUserName;
var checkage;
var gender;
var allUsers;
var retypePasswordCheck;

if (localStorage.getItem("users") != null) {
    allUsers = JSON.parse(localStorage.getItem("users"));

}
else {
    allUsers = [];
}

function clearInputs()
{
    userNameInput.value="";
    userPasswordInput.value="";
}

regesterationBtn.addEventListener("click", addUserProfile);
email.addEventListener("keyup", emailValidation);
regPassword.addEventListener("keyup", passwordValidation);
firstName.addEventListener("keyup", firstNameValidation);
lastName.addEventListener("keyup", lastNameValidation);

register.addEventListener("click", function(){
    regForm.classList.replace("display-none", "display");
    loggingForm.classList.replace("display", "display-none");
    welcomeMessage.classList.replace("display", "display-none");

})
closeRegForm.addEventListener("click", function(){
    regForm.classList.replace("display", "display-none");


})

logFormClose.addEventListener("click", function(){
    loggingForm.classList.replace("display", "display-none")
})
signUp.addEventListener("click", function(){
   
    loggingForm.classList.replace("display", "display-none");
    regForm.classList.replace("display-none", "display");
    
})

openLogForm.addEventListener("click",function(){
    welcomeMessage.classList.replace("display", "display-none");
    loggingForm.classList.replace("display-none", "display");
    clearInputs();
    regForm.classList.replace("display", "display-none");
    invalidUserName.classList.replace("display","display-none");
    invalidPassword.classList.replace("display", "display-none"); 

})

loginBtn.addEventListener("click", function(){

for (var i=0; i< allUsers.length; i++)
{
    if(allUsers[i].userName== userNameInput.value && allUsers[i].userPassword==userPasswordInput.value)
    { 
        console.log("hello");
        loggingForm.classList.replace("display", "display-none");
        welcomeMessage.classList.replace("display-none", "display");
        welcomeMessage.innerHTML=`Welcome ${allUsers[i].userFirstName} ${allUsers[i].userLastName}`;

    }
    else  if(allUsers[i].userName== userNameInput.value && allUsers[i].userPassword!=userPasswordInput.value)
    {
        console.log("invalid pass")
         invalidPassword.classList.replace("display-none", "display"); 
         invalidUserName.classList.replace("display","display-none");

    }
    else  if(allUsers[i].userName!= userNameInput.value && allUsers[i].userPassword==userPasswordInput.value)
    {
        console.log("invalid user");
        invalidUserName.classList.replace("display-none","display");
        invalidPassword.classList.replace("display", "display-none"); 
    }
    else  if(allUsers[i].userName!= userNameInput.value && allUsers[i].userPassword!=userPasswordInput.value)
    {
        console.log("invalid both");
        invalidUserName.classList.replace("display-none","display");
        invalidPassword.classList.replace("display-none", "display"); 
    }
}

})

function checkRetypePassword()
{
    if ( regPassword.value != retypePassword.value )
    {
        retypePassNotMatch.classList.replace("display-none", "display");
        retypePasswordCheck=false; 

    }
    else
    {
        retypePassNotMatch.classList.replace("display", "display-none");
        retypePasswordCheck=true; 
    }

}

function checkUserNameStorage() {
    var exist = false; 
    var notExist = false;
    if (regUserName.value =="") {
        emptyRegUserName.classList.replace("display-none", "display");
        checkUserName = false;
    }

    else if (regUserName.value != null) {

        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].userName == regUserName.value) {
                exist = true;


            }

            else {

                notExist = true;


            }


        }
        if (exist == true) {
            invalidRegUserName.classList.replace("display-none", "display");
            checkUserName = false;
            emptyRegUserName.classList.replace("display", "display-none");

            console.log("user name exist");

        }
        else if (notExist = true) {
            invalidRegUserName.classList.replace("display", "display-none");
            emptyRegUserName.classList.replace("display", "display-none");
            console.log("user name doesnot exist");
            checkUserName = true;

        }

    }
}

function checkEmailStorage() {
    var exist = false; 
    var notExist = false;
    if (email.value =="") {
        emptyEmail.classList.replace("display-none", "display");
        checkEmail = false;
    }
   
    else if (email.value != null) {
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].userEmail == email.value) {


                exist = true;



            }

            else {

                notExist = true;



            }


        }
        if (exist == true) {
            userInvalidEmail.classList.replace("display-none", "display");
            emptyEmail.classList.replace("display", "display-none");
            checkEmail = false;
            console.log("mail exist");

        }
        else if (notExist = true) {
            console.log(email.value);
            console.log("mail doesnot exist");
            userInvalidEmail.classList.replace("display", "display-none");
            emptyEmail.classList.replace("display", "display-none");
            checkEmail = true;

        }
    }
    
}


function lastNameValidation() {
    var rejex = /^([a-zA-Z]){3,30}$/;
    if (lastName.value == null) {
        lastNameInvalid.classList.replace("display", "display-none");
        checkLastName = false;
    }
    else if (rejex.test(lastName.value) == true) {
        lastNameInvalid.classList.replace("display", "display-none");
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
        checkLastName = true;

    }
    else if (rejex.test(lastName.value) == false) {
        lastNameInvalid.classList.replace("display-none", "display");
        lastName.classList.remove("is-valid");
        lastName.classList.add("is-invalid");
        checkLastName = false;
    }
}


function firstNameValidation() {
    var rejex = /^([a-zA-Z]){3,30}$/;
    if (firstName.value == null) {
        firstNameInvalid.classList.replace("display", "display-none");
        checkfirstName = false;
    }

    else if (rejex.test(firstName.value) == true) {
        firstNameInvalid.classList.replace("display", "display-none");
        firstName.classList.remove("is-invalid");
        firstName.classList.add("is-valid");
        checkFirstName = true;

    }
    else if (rejex.test(firstName.value) == false) {
        firstNameInvalid.classList.replace("display-none", "display");
        firstName.classList.remove("is-valid");
        firstName.classList.add("is-invalid");
        checkFirstName = false;
    }
}

function passwordValidation() {
    var rejex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?@ "]).*$/;

    if (regPassword.value == null) {
        invalidRegPass.classList.replace("display", "display-none");
        checkPassword = false;
    }

    else if (rejex.test(regPassword.value) == true) {
        invalidRegPass.classList.replace("display", "display-none");
        regPassword.classList.remove("is-invalid");
        regPassword.classList.add("is-valid");
        checkPassword = true;

    }
    else if (rejex.test(regPassword.value) == false) {
        invalidRegPass.classList.replace("display-none", "display");
        regPassword.classList.remove("is-valid");
        regPassword.classList.add("is-invalid");
        checkPassword = false;
    }
}

function emailValidation() {

    var rejex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.value == null) {
        emptyEmail.classList.replace("display-none, display");
        checkEmail = false;
    }


    else if (rejex.test(email.value) == true) {
        userInvalidEmail.classList.replace("display", "display-none");
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        checkEmail = true;

    }
    else if (rejex.test(email.value) == false) {
        userInvalidEmail.classList.replace("display-none", "display");
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        checkEmail = false;
    }


}
function addUserProfile() {

    ageValidation();
    genderValidation();
    checkUserNameStorage();
    checkEmailStorage();
    checkRetypePassword();



    if (checkEmail == true && checkUserName == true && checkage == true && checkPassword == true && checkFirstName == true && checkLastName == true &&  retypePasswordCheck==true) {
        var user = {
            userFirstName: firstName.value,
            userLastName: lastName.value,
            userEmail: email.value,
            userName: regUserName.value,
            userPassword: regPassword.value,
            userAge: age.value,
            userGender: gender




        };

        allUsers.push(user);

        localStorage.setItem("users", JSON.stringify(allUsers));

    }
    else if (lastName.value == "" || firstName.value == "" || regPassword.value == "" || age.value == "") {
        alert("Empty Field/Fields ");
    }
}

function ageValidation() {
    if (age.value =="") {
        checkage = false;
    }
    else {
        checkage = true;
    }
}



function genderValidation() {

    if (userGenderMale.checked == true) {
        gender = "Male";
    }
    else if (userGenderFemale.checked == true) {
        gender = "Female";
    }
}