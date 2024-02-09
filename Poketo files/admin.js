
function createProduct(){
    var productName = document.getElementById("productName").value;
                console.log(productName);
    var price = document.getElementById("price").value;
                console.log(price);
    var quantity = document.getElementById("quantity").value;
          console.log(quantity)
    var category = document.getElementById("category").value;
                console.log(category);
    var describe = document.getElementById("describe").value;
                console.log(describe);
    var image = document.getElementById("image").value;
                console.log(image);
  
    if (productName ==="") {
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

    if (image ===""){
        error = true;
        document.getElementById("imageerror").textContent = "product image required";

    } else {
        newProduct = []
          var product = {
            "productName": productName,
            "price": price,
            "quantity": quantity,
            "category": category,
            "description": describe,
            "image": image,
        }
          newProduct.push(product)
          newProduct = JSON.stringify(newProduct)
          localStorage.setItem("new", newProduct)
    }
    console.log(createProduct)
}

$(document).ready(function(){
  $('.signin').on('submit', function(event){
    event.preventDefault();
    var createPro = new FormData();
    createPro.append("iD", iD.val());
    createPro.append("productName", productName.val());
    createPro.append("price", price.val());
    createPro.append("quantity", quantity.val());
    createPro.append("category", category.val());
    createPro.append("description", description.val());
    createPro.append("image", image[0].file[0]);
    
    $.ajax({
      type: 'POST',
      url: "http://159.65.21.42:9000/create/product",
      data: createPro,
      processData: false,
      contentData: false,
      success: function (postProduct){
        console.log(postProduct);
        alert('Product Successfully Created');
      },
      error: function(postProductError){
        console.log(postProductError)
      }
    });
    console.log(createPro)[0].reset();
  })
  
});

    $.ajax({
      type: "GET",
      url: "http://159.65.21.42:9000/products",
      success: function(getProduct){
        console.log(getProduct) 
        severalProducts = ""
        $(getProduct, function(i, pro){
          for (let i=0; i < severalProducts.length; i++) {
            if(severalProducts[i].category == "poketo"){
              $(".productTable").append(
                `
                <div id="table" id=${pro.iD}>     
                  <h3 id="iD">id=${pro.iD}</h3>
                  <img src=${pro.image} >
                  <h3 id="productName">id=${pro.productName}</h3>
                  <p id="price">id=${pro.price}</p>
                  <p id="category">id=${pro.category}</p>
                  <p id="quantity">id=${pro.quantity}</p>
                  <p id="description">id=${pro.description}</p>
                  <button><a href="editform.html" id="edit" onclick="editProduct()">Edit</a></button>
                  <button id="delete" onclick="editProduct()">Delete</a></button>
                </div>
                `
              )
            }
          }
        })
      }
    })
    
    var deleteBtn = $("#deleteProduct");
    $.each(deleteBtn, function (i, dlt){
      $(dlt).click(function (e){
        var arsenal = $(dlt).parent();
        var id = $(arsenal).attr("iD");
        $.ajax({
          method: "DELETE",
          url: "http://159.65.21.42:9000/products",
          success: function(deleteProduct){
            console.log(deleteProduct);
          },
          error: function (err){
            console.log(err);
          }
        })
      })
    })

    

