function createUser(){
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
        signup = []
          var newUsers = {
            "name": fullname,
            "phone": phone,
            "email": email,
            "password": password,
        }
        signup.push(newUsers)
        signup = JSON.stringify(signup)
          localStorage.setItem("newSignups", signup)
        alert("You have successfully created an account")
    }
}

$(document).ready(function(){
    $('#fresher').on('submit', function(event){
      event.preventDefault();
      let createNewUser = new FormData();
      createNewUser.append("fullname", fullname.val());
      createNewUser.append("phone", phone.val());
      createNewUser.append("email", email.val());
      createNewUser.append("password", password.val());
      
      $.ajax({
        type: "POST",
        url: "http://159.65.21.42:9000/create/user",
        data: JSON.stringify(createNewUser),
        processData: false,
        contentData: 'application/json',
        success: function (postUser){
          console.log(postUser);
          alert('Registration Successful');
        },
        error: function(postUserError){
          console.log(postUserError)
        }
      });
      console.log(createNewUser)[0].reset();
    })
    
  });
  
      $.ajax({
        type: "GET",
        url: "http://159.65.21.42:9000/users",
        success: function(getUser){
            console.log(getUser);
            userList = getUser;
            let list = ""
            for (let i = 0; i < userList.length; i++){
                list += `
                    <tr>
                      <td>${i + 1}</td>
                      <td>${userList[i]["iDU"]}</td>
                      <td>${userList[i]["fullname"]}</td>
                      <td>${userList[i]["phone"]}</td>
                      <td>${userList[i]["email"]}</td>
                      <td>${userList[i]["password"]}</td>
                      <td><a href="" id="edit">Edit</a> / <a href="" id="delete">Delete</a></td>
                    </tr>
                `
            }
        //   $.each(getUser, function(i, pro){
        //     for (let i=0; i < severalUsers.length; i++) {
        //       if(severalUsers[i].category === "poketo"){
        //         $(".productTable").append(
        //           `
        //           <div id="table" id=${pro.iD}>     
        //             <h3 id="iD">id=${pro.iD}</h3>
        //             <img src=${pro.image} >
        //             <h3 id="productName">id=${pro.productName}</h3>
        //             <p id="price">id=${pro.price}</p>
        //             <p id="category">id=${pro.category}</p>
        //             <p id="quantity">id=${pro.quantity}</p>
        //             <p id="description">id=${pro.description}</p>
        //             <button><a href="editform.html" id="edit" onclick="editProduct()">Edit</a></button>
        //             <button id="delete" onclick="editProduct()">Delete</a></button>
        //           </div>
        //           `
        //         )
        //       }
        //     }
        //   })
        }
      })
      
      var deleteBtnn = $("#deleteUser");
      $.each(deleteBtnn, function (i, dltuser){
        $(dltuser).click(function (e){
          var arsenal = $(dltuser).parent();
          var id = $(arsenal).attr("iD");
          $.ajax({
            method: "DELETE",
            url: "http://159.65.21.42:9000/users",
            success: function(deleteUser){
              console.log(deleteUser);
            },
            error: function (err){
              console.log(err);
            }
          })
        })
      })
  
      
  
  