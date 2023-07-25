const wes = document.querySelector('.wes');


wes.addEventListener('click', function(event){
    // event.preventDefault();
    console.log("you got clicked");
    const shouldChangePage = confirm('This website may be malicious! Would you like to change?');
    if(!shouldChangePage){
        window.location = event.currentTarget.href;
    }


})

const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener('submit', function(event){
    
    event.preventDefault();

    // get name of form being submitted
    console.log(event.currentTarget.name.value)

    // get email of form being submitted
    console.log(event.currentTarget.email.value);

    // checks to see if checkbox on form is checked
    console.log(event.currentTarget.agree.checked);
})

// eventListener types you can use on for inputs: 

// 'keyup' alerts when words are being typed

// 'keydown' alerts when words are being deleted 

// "focus" alerts when you click on event


const photo = document.querySelector('.photo');

photo.addEventListener('click', function(){
    console.log('you clicked the photo')
})