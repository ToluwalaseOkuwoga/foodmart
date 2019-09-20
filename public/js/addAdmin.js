$('window').ready(function(){
    $('#regAdmin').on('click', ()=>{
        event.preventDefault()
        let first_name = $('#firstName').val();
        let last_name = $('#lastName').val();
        let password = $('#inputPassword').val();
        let email = $('#inputEmail').val();
        console.log(first_name,password,email)
        $.ajax({
            url: 'http://localhost:3000/adminSignup',
            method: 'post',
            data: {
                first_name,
                last_name,
                password,
                email
            },
            success: function() {
                window.location.assign("login.html");  
            }
        })
    })
    })