$(document).ready(function() {
    // I'm assuming the user logs in and i store the user id in localstorage
     let currentId = localStorage.getItem('userid');
     $.ajax({
         method: "get",
         url : `http://localhost:3000/cart`,
         success: function(data) {
             //console.log('Tolu is here')
            $.each(data, function(index, value) {
                //console.log('she is also here')
                row = '';
                row += `<tr>
            <td>${value.userId}</td>
            <td>${value.foodname}</td>
            <td>${value.price}</td>
          </tr>`;
    
                //Append the concatenated string into the product listing class
                $('#orderTable tbody').append(row);
           
         })
     }
    })
})