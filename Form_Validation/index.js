const username = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const submitButton = document.querySelector('input[type="submit"]');



submitButton.addEventListener("click", (event)=> {
    event.preventDefault();
    
    //form validation
    if(username == ""){
        console.log("Username is required");
    }
    if(!email.includes("@")){
        console.log("Enter correct email address")
    }
    if(/\d/.test(password)){
        console.log("Your password should contain a number.")
    } 
  



});

