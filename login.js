const validate = () => {
    const username = document.contact.username.value.trim();
    const password = document.contact.password.value.trim();
    const email = document.contact.email.value.trim();
    const nameError = document.getElementById("nameError");
    const passwordError = document.getElementById("passwordError");
    const emailError = document.getElementById("emailError");
    let nameStatus = false;
    let passwordStatus = false;
    let emailStatus = false;
    const alphaexp = /^[a-zA-Z\s]+$/;
    const pwdExp = /^[0-9a-zA-Z]+$/;
    const emailExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
    // Name Validation
    if (username === "") {
      nameError.textContent = "Please enter your username";
    } else if (username.match(alphaexp)) {
      nameError.textContent = "";
      nameStatus = true;
    } else {
      nameError.textContent = "Username should only contain alphabets";
    }
  
    // Password Validation
    if (password === "") {
      passwordError.textContent = "Please enter your password";
    } else if (password.match(pwdExp)) {
      passwordError.textContent = "";
      passwordStatus = true;
    } else {
      passwordError.textContent = "Password can be alphanumeric";
    }
  
    // Email Validation
    if (email === "") {
      emailError.textContent = "Please enter your email";
    } else if (email.match(emailExp)) {
      emailError.textContent = "";
      emailStatus = true;
    } else {
      emailError.textContent = "Please enter a valid email";
    }
  
    // Return
    if (nameStatus && passwordStatus && emailStatus) {
      alert("Login successful!"); 
      return true;
    } else {
      return false;
    }
  };