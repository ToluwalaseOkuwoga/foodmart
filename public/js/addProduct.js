$('window').ready(function(){
$('#create-product').on('click', ()=>{
    event.preventDefault()
    let foodname = $('#foodname').val();
    let category = $('#foodCategory').val();
    let imageUrl = $('#foodImage').val();
    let price = $('#foodPrice').val();
    console.log(foodname,category,imageUrl,price)
    $.ajax({
        url: 'http://localhost:3000/products',
        method: 'post',
        data: {
            foodname,
            category,
            imageUrl,
            price
        },
        success: function() {
            window.location.assign("view_products.html");  
        }
    })
})
})