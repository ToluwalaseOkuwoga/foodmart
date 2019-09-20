$(document).ready(function(){
    $('#delete').on('click', ()=>{
        event.preventDefault()
    var currLocation = window.location.href;
    var url = new URL(currLocation);
    var id  = url.searchParams.get("id");
   
    $.ajax({
            url : `http://localhost:3000/products/${id}`,
            method:"delete",
            
        }).done(function(response){
                window.location ="view_products.html";
        });
    })
   });