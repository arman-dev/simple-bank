// step1: add click event handler with button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step2: get the email address
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step3: get the password
    // always remember to use .value to get text from an input field 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // DON'T USE THIS METHOD! WE WILL USE OTHER METHOD IN FUTURE;

    // step4: verify email and password
    if(email === 'arman@gmail.com' && password === 'alliswell'){
        console.log('Valid User')
    }
    else{
        console.log('Dure Jaiya Mor');
    }

    
})