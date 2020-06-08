$('window').ready(function(){
  $('#create-user').on('click', ()=>{
      event.preventDefault()
      let full_name = $('#username').val();
      let password = $('#userEmail').val();
      let email = $('#userPassword').val();
      console.log(full_name,password,email)
      $.ajax({
          url: 'http://localhost:3000/userSignup',
          method: 'post',
          data: {
              full_name,
              password,
              email
          },
          success: function() {
              window.location.assign("login.html");  
          }
      })
  })
  })