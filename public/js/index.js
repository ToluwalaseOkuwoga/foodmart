$(function() {

    $('#id01').submit((e) => {
      e.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  
  $.ajax(
    {
       type:'GET',
       url: 'http://localhost:3000/user',
       success:function(data){
         console.log(data);
         $.each(data, function(index,user){
           if(user.email === email && user.password === password){
            window.localStorage.setItem('userid', user.id);
             window.location.href = "../index.html"
           }else{
             console.log('error')
           }
         })
       },
       error:function(){
          console.log("no db");
       }
    }
  );
  })

  $('#id02').submit((e) => {
    e.preventDefault();
const email = document.querySelector(".email").value;
const password = document.querySelector(".password").value;

$.ajax(
  {
     type:'GET',
     url: 'http://localhost:3000/admin',
     success:function(data){
       console.log(data);
       $.each(data, function(index,admin){
         if(admin.email === email && admin.password === password){
           
          window.location.href = "../dashboard"

         }else{
           console.log('error')
         }
       })
     },
     error:function(){
        console.log("no db");
     }
  }
);
})
  })
  