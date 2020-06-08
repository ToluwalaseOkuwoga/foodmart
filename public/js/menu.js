let total = 0;
$(document).ready(function() {
   // I'm assuming the user logs in and i store the user id in localstorage
    let currentId = localStorage.getItem('userid');
    $.ajax({
        method: "get",
        url : `http://localhost:3000/cart?userId=${currentId}`,
        success: function(data) {
            window.localStorage.setItem('cartAmount', data.length)
        }
    })

    //Get the cart count from localstorage on load of the page
    let currentCart = localStorage.getItem('cartAmount');
    if (currentCart) {
      total += parseInt(currentCart);
      $('.cartCount')
        .fadeIn()
        .html(total);
    }
    //Get all products from the database
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/products',
      success: function(response) {
          //Loop through the response gotten if any and concat the html to a string
          $.each(response, function(index, value) {
            product = '';

            product+=`<div class="column">
            <div  id="${value.foodname}">
                <div class="card">
                    <img src="${value.imageUrl}" alt="${value.foodname}" style="width: 100%" height="200px">
                    <h1 class="foodName">${value.foodname}</h1>
                    <p class="price">${value.price}</p>
                    <p><button class="addToCart">Add to cart</button></p>   
                </div>
            </div>
            </div>`;

            //Append the concatenated string into the product listing class
            $('.row').append(product);
          });

          //When a user clicks the add to cart button on a particular product
          $('.addToCart').click(function(event) {
            event.preventDefault();
            //Get the id of the user that ordered the products
            let orderedById = localStorage.getItem('userid');
            //Get the price of the product
            let price = $(this)
              .parent()
              .prev('.price')
              .html();
            //Get the product name
            let productName = $(this)
              .parent()
              .prev().prev()
              .html();
              

            // Submit the order into the cart array in db.json
            $.ajax({
              method: 'POST',
              url: 'http://localhost:3000/cart',
              data: {
                userId: orderedById,
                price,
                foodname:productName,
              },
              success: function() {
                //Increment the cart count
                ++total;
                //Store the cart count in localstorage so it won't be lost if the user refreshes
                window.localStorage.setItem('cartAmount', total);
                //Display the cart count
                $('.cartCount')
                  .fadeIn()
                  .html(total);
              },
            });
        })
      },
    })
})
    
//     <div class="column">
//     <div id="goatmeat">
//     <div class="card">
//         <img src="../images/Roasted-Goat-Meat.jpg" alt="Goat meat" style="width: 100%" height="200px">
//         <h1>Goat Meat</h1>
//         <p class="price">N1000.00</p>
//         <p><button>Add to cart</button></p>   
//      </div>
// </div>
// </div>