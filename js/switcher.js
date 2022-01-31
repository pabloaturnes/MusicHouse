export default function switcher(){


    let $loginText = document.querySelector(".login-text-container");
    let $registerText = document.querySelector(".register-text-container");
    let $loginForm = document.querySelector(".login-form");
    let $registerForm = document.querySelector(".register-form");
    let $switchButtons = document.querySelectorAll(".switch");
    let $inputs = document.querySelectorAll("input")

    $switchButtons.forEach(button =>{


        console.log($switchButtons);

        button.addEventListener("click",()=>{


            //limpio los iconos de error y los mensajes de error de todos los inputs
            $inputs.forEach(input=>{

                //limpio los iconos cada vez que se dispara la funcion de validacion;
                if(input.parentElement.querySelector(".error-icon") != null){
                    let remove = input.parentElement.querySelector(".error-icon");
                    input.parentElement.removeChild(remove);
                }
                
                //limpio los mensajes de error cada vez que se dispara la funcion de validacion;
                if(input.parentElement.querySelector(".error-msj") != null){
                    let remove = input.parentElement.querySelector(".error-msj");
                    input.parentElement.removeChild(remove);
                }

            })


         $loginText.classList.toggle("hidden");
         $registerText.classList.toggle("hidden");
         $loginForm.classList.toggle("hidden");
         $registerForm.classList.toggle("hidden");

        })

    })



}