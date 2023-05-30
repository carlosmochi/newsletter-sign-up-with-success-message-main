const func = {
    checkEmail: function(email){
        if(email.value == "" || !email.validity.valid){
            
            console.log("testando");
            email.classList.add("error")
            document.getElementsByClassName("email_warning")[0].removeAttribute("hidden")
            setTimeout(() => {
                email.classList.remove("error")
                document.getElementsByClassName("email_warning")[0].setAttribute("hidden", true)
            }, 3000);
            event.preventDefault();
        }
        
    }
} 
window.func = func;
export {func};
