const func = {
    checkEmail: function(email){
        event.preventDefault();
        if(email.value == "" || !email.validity.valid){
            console.log("testando");
            email.classList.add("error")
            document.getElementsByClassName("email_warning")[0].removeAttribute("hidden")
            setTimeout(() => {
                email.classList.remove("error")
                document.getElementsByClassName("email_warning")[0].setAttribute("hidden", true)
            }, 3000);
            event.preventDefault();
        }else{
            document.getElementsByClassName("info_div")[0].setAttribute("hidden", true)
            document.getElementsByClassName("image_div")[0].setAttribute("hidden", true)
            document.getElementsByClassName("success_div")[0].removeAttribute("hidden")
        }   
    },
    dismissMessage(){
        location.reload();
    }
} 
window.func = func;
export {func};
