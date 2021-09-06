document.getElementById('submit-button').addEventListener ('click',function(){
    // get E-mail 
   const emailField= document.getElementById('user-email')
   const userEmail = emailField.value;
//    console.log(userEmail);

// get passwordField

const passwordField = document.getElementById('user-password');
const userPassword = passwordField.value;

// condition 
if (userEmail=='demo@gmail.com' && userPassword =='demofor'){
    console.log('valid user');
    window.location.href='demo.html';
}
})

