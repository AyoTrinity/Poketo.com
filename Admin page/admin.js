
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
    

    // var createUsersuccess = document.getElementById("createUsersuccess"); 
    // createUsersuccess.innerHTML = `You have successfully created an account`;
}

function createProduct(){
    var name = document.getElementById("productName").value;
                console.log(name);
    var price = document.getElementById("price").value;
                console.log(price);
    var quantity = document.getElementById("quantity").value;
          console.log(quantity)
    var category = document.getElementById("category").value;
                console.log(category);
    var describe = document.getElementById("describe").value;
                console.log(describe);
    var photo = document.getElementById("photo").value;
                console.log(photo);
  
    if (name ==="") {
                  error = true;
      document.getElementById("productnameerror").textContent = "product name required";   
    }

    if (price ==="") {
      error = true;
      priceerror.textContent = "product price required";
    }
        
    if (quantity ===""){
      error = true;
      document.getElementById("quantityerror").textContent = "product quantity required";
    }

    if (category ===""){
        error = true;
        document.getElementById("categoryerror").textContent = "product category required";
    }
    
    if (describe ===""){
        error = true;
        document.getElementById("describeerror").textContent = "product description required";
    }

    if (photo ===""){
        error = true;
        document.getElementById("photoerror").textContent = "product image required";

    } else {
        newProduct = []
          var product = {
            "productName": name,
            "price": price,
            "quantity": quantity,
            "category": category,
            "description": describe,
            "image": photo,
        }
          newProduct.push(product)
          newProduct = JSON.stringify(newProduct)
          localStorage.setItem("new", newProduct)
        alert("You have successfully created a Product")
    }
}

function Products() {

  let createPro = new FormData()
  createPro.append("productName", productName.val())
  createPro.append("price", price.val())
  createPro.append("quantity", quantity.val())
  createPro.append("category", category.val())
  createPro.append("description", description.val())
  createPro.append("image", image[0].files[0])

  $.ajax({
    type: "POST",
    url: "http://159.65.21.42:9000/create/product",
    contentType: false,
    processData: false,
    data: createPro,
    success: function (postProduct) {
      console.log(postProduct);

      if (postProduct["error"]) {
        alert(postProduct["error"])
      } else {
        alert(`${postProduct["name"]} registration successful`)
      }
    },
    error: function (postProductError) {
      console.log(postProductError);
      alert(postProductError.statusText)
    }
  })
  console.log(createPro)
}

function getProduct() {

  $.ajax({
    type: "GET",
    url: "http://159.65.21.42:9000/products",
    success: function (get) {
      console.log(get);
      listOfProducts = prod.reverse()
      let arteta = ""

      for (let i = 0; i < listOfProducts.length; i++) {
        if (listOfProducts[i].category === "ayoProduct") {
          arteta += `<tr>
                        <td>${i + 1}</td>
                        <td>${listOfProducts[i]["name"]}</td>
                        <td>${listOfProducts[i]["category"]}</td>
                        <td>${listOfProducts[i]["price"]}</td>
                        <td>${listOfProducts[i]["quantity"]}</td>
                        <td>${listOfProducts[i]["description"]}</td>
                        <td><a href="" id="edit"  index="${i}">Edit</a>  |  <a href="" class="delete" index="${i}">Delete</a></td>
                      </tr>`
        }
      }
      tableData.html(arteta)
      productTable.html(arteta)
    },
    error: function (err) {
      console.log(err);
      alert(err.statusText)
    }
  })

}


