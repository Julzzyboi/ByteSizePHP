
function validateForm(event){
    event.preventDefault();
    
    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var Email = document.getElementById("email").value;
    var PhoneNum = document.getElementById("Phone").value;
    var Gender = document.querySelector('input[name="Gender"]:checked');
    var Password = document.getElementById("password").value;
    var Cpass = document.getElementById("Cpass").value;

    var errorFname = document.getElementById("errorFname");
    var errorLname = document.getElementById("errorLname");
    var errorEmail = document.getElementById("errorEmail");
    var errorPhone = document.getElementById("errorPhone");
    var errorGender = document.getElementById("errorGender");
    var errorPassword = document.getElementById("errorPassword");
    var errorCpass = document.getElementById("errorCpass");



    // Clearing previous errors sa mga input
    errorFname.innerText = "";
    errorLname.innerText = "";
    errorEmail.innerText = "";
    errorPhone.innerText = "";
    errorGender.innerText = "";
    errorPassword.innerText = "";

    let IsValid = true;

    if(fname === ""){
        IsValid = false;
        errorFname.innerText = "First name is required.";
    }else if (lname === "") {
        errorLname.innerText = "Last name is required.";
        IsValid = false;
    }else if (Email === "") {
        errorEmail.innerText = "Email Address is required.";
        IsValid = false;
    }else if (PhoneNum === "") {
        errorPhone.innerText = "Phone Number is required.";
        IsValid = false;
    }else if (!Gender) {
        errorGender.innerText = "Please select your gender.";
        IsValid = false;
    }else if (Password === "") {
        errorassword.innerText = "Password is required.";
        IsValid = false;
    }else if (Cpass === "") {
        errorCpass.innerText = "Password is not matched.";
        IsValid = false;
    }
    else if (IsValid) {
    document.getElementById("SignUp-Button").submit();
    }
}

