$(document).ready(function() {
    // I'm assuming the user logs in and i store the user id in localstorage
     let currentId = localStorage.getItem('userid');
     $.ajax({
         method: "get",
         url : `http://localhost:3000/products`,
         success: function(data) {
             console.log('Tolu is here')
            $.each(data, function(index, value) {
                //console.log('she is also here')
                row = '';
                row += `<tr>
            <td>${value.foodname}</td>
            <td>${value.category}</td>
            <td>${value.price}</td>
            <td><img src="${value.imageUrl}" width="50px" height="50px"></td>
            <td><button type="button" class="btn btn-primary btn-sm">Update</button>&nbsp;<button type="button" class="btn btn-danger btn-sm" onclick="deleteProduct(${value.id})">Delete</button></td>
          </tr>`;
    
                //Append the concatenated string into the product listing class
                $('#foodTable tbody').append(row);
           
         })
     }
    })
})
//delete food
function deleteProduct(id){
    //console.log('he is also here')
    $.ajax({
        method:"delete",
        url:`http://localhost:3000/products/${id}`,
        success: function(data){
            window.location.reload(true);
        }
    })
}

//edit food
 