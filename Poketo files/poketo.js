
  function signup(){
    var fullname = document.getElementById("fullname").value;
                console.log(fullname);
    var phone = document.getElementById("phone").value;
                console.log(phone);
    var email = document.getElementById("email").value;
          console.log(email)
    var password = document.getElementById("password").value;
                console.log(password);
  
    if (fullname ==="") {
                  error = true;
      document.getElementById("fullnameerror").textContent = "Full Name Required";   
    }

    if (phone ==="") {
      error = true;
      phoneerror.textContent = "Phone Number Required";
    }

    if (password ===""){
      error = true;
      document.getElementById("passworderror").textContent = "Password Required";
    }

    if (email ===""){
      // error = true;
      document.getElementById("emailerror").textContent = "Email Required";
      return false;
      }else if (!EmailIsLegal(email)){
        document.getElementById("emailerror").textContent = "Please Input Your Correct Email";
          return false;
            }
            function EmailIsLegal(email){
                return email.includes("@") && email.includes(".");
    }

    if (password ===""){
      error = true;
      document.getElementById("passworderror").textContent = "Password Required";

    } else {
      user = []
      var userDetails = {
        "name": fullname,
        "phone": phone,
        "email": email,
        "pass": password,
      }
  
      user.push(userDetails)
      user = JSON.stringify(user)
      localStorage.setItem("newUser", user)
    }

    var signUpsuccess = document.getElementById("signUpsuccess");                        
    signUpsuccess.textContent = `You have successfully created an account`;

  }

  function signIn(){
    var emailOne = document.getElementById("emailOne").value;
          console.log(emailOne)
    var passwordOne = document.getElementById("passwordOne").value;
                console.log(passwordOne);

    if (passwordOne ===""){
                  error = true;
      document.getElementById("passworderrorOne").textContent = "Password Required";
                  }
      if (passwordOne != localStorage.paswordOne) {
          passworderrorOne = "Wrong password!"
                  }

      if (emailOne ===""){
        document.getElementById("emailerrorOne").textContent = "Email Required";
        return false;
        }else if (!EmailIsLegal(emailOne)){
        document.getElementById("emailerrorOne").textContent = "Please Input Your Correct Email";
        return false;
      }
        function EmailIsLegal(emailOne){
        return emailOne.includes("@") && emailOne.includes(".");
        }
        if (emailOne != localStorage.emailOne) {
          emailerrorOne.textContent = "Email not acknowledged!"
        } else {
          emailerrorOne.textContent = "Email acknowledged!"
        }

      if (passwordOne ===""){
        error = true;
        document.getElementById("passworderrorOne").textContent = "Password Required";
        }
        if (passwordOne != localStorage.paswordOne) {
          passworderrorOne = "Wrong password!"
        }
    
    var signInsuccess = document.getElementById("signInsuccess");                        
    signInsuccess.textContent = `Sign In Successful!`;
  }
  
