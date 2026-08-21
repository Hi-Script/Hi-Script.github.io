// validation of HTML Form using javascript....

//1. create a function that will handle the validity
(function(){
    //2. use strict to check for the validity
    'use strict'

    //3. fetch the form to be validated from html page using the class and store in a variable
    var forms = document.querySelectorAll('.needs-validation')

    //4. call the fetched form with (Array.prototype.slice.call)
    Array.prototype.slice.call(forms)

    //5. loop over the form and the validity using (.forEach)
    .forEach(function(form) {
        form.addEventListener('submit', function(event){
            //6. check if the form is valid
            if(!form.checkValidity()){
                //7. if the form is not valid, prevent from submission
                event.preventDefault()
                event.stopPropagation()

            }
            //8. if the form is valid, validate and submit
            form.classList.add('was-validated')

        }, false)
        
    })

})();

function signUp() {
    alert("Coming soon!")
};

function thankYou() {
    alert("Thanks for Contacting us, we will get back to you soon.")
}