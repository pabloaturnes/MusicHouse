export default function validationForms(){
    let $loginForm = document.querySelector(".login-form")
    let $registerForm = document.querySelector(".register-form")
    let $formUser = document.getElementById("user");
    let $formPassword = document.getElementById("password");
    let $formPassword2 = document.getElementById("password2");
    let $formEmail = document.getElementById("email");
    let $formUsername = document.getElementById("username");
    let $formContrasenia = document.getElementById("contrasenia");
    let $loginInputs = [$formUsername, $formContrasenia];
    let $registerInputs = [$formUser, $formPassword, $formPassword2, $formEmail];
    let formValidation = true;



    $registerForm.addEventListener("submit",(event)=>{

        event.preventDefault(); //prevenimos que se envie el formulario todavia

        emptyValidation($registerInputs);

        if(formValidation == true){
            passwordControl();
        }
        
        emailValidation();

        if(formValidation == true){
            //genero codigo aleatorio
            let code = Math.random() * (999999 - 111111) + 111111;
            code = Math.trunc(code);
            //le agrego el codigo a un mensaje automatico de formsubmit.co
            let $autoresponse = document.querySelector(".autoresponse");
            $autoresponse.value = `Tu codigo de confirmacion es: ${code}`;
            //envío el formulario
            $registerForm.submit();
        }

    })


    $loginForm.addEventListener("submit",(event)=>{
        event.preventDefault(); //prevengo que se envíe el formulario

        emptyValidation($loginInputs);

        if(formValidation == true){
            consulta();
        }
        

        if(formValidation == true){
            $loginForm.submit();
        }

    })





    function emptyValidation($forms){

        formValidation = true;  // se resetea la variable de control

        $forms.forEach(input=>{

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
            
            input.value = input.value.trim();  // le quito los espacios antes y despues

            if(input.value == ""){  //pregunto si los inputs estan vacios;
                errorMsj(input,"el campo no puede estar vacio");
                formValidation = false;  // la variable de control arroja falso
            }


        })

    }


    function emailValidation(){


        let regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;   // regex para un correo electronico
        let spacesRegex = /\s/;    // pregunta si tiene al menos un espacio en blanco 
        
        $formEmail.value = $formEmail.value.trim();  // le quito los espacios antes y despues

        if(!regex.test($formEmail.value)){  // si no tiene el formato email
            errorMsj($formEmail,"Ingrese un e-mail valido")
            formValidation = false;  // la variable de control arroja falso
        }

        if(spacesRegex.test($formEmail.value)){  // si tiene algun espacio en blanco
            errorMsj($formEmail,"el Email contiene espacios en blanco")        
            formValidation = false;  // la variable de control arroja falso
        }
    };


    function consulta(){

        if($formUsername.value != "usuario1"){
            errorMsj($formUsername,"Usuario Incorrecto")
            formValidation = false;  // la variable de control arroja falso
        };

        if($formContrasenia.value != "contrasenia"){
            errorMsj($formContrasenia,"Contraseña incorrecta")
            formValidation = false;  // la variable de control arroja falso
        };
    };


    function passwordControl(){

        if($formPassword.value != $formPassword2.value){
            errorMsj($formPassword2,"Las contraseñas no coinciden")
            formValidation = false;  // la variable de control arroja falso
        }
    }


    function errorMsj(input,mensaje){

        // aca muestro el mensaje de error
        if(input.parentElement.querySelector(".error-msj")){  // si ya habia un mensaje de error anterior lo sistituye
            input.parentElement.querySelector(".error-msj").innerHTML= mensaje;
        }else{ // si no habia un mensaje anterior lo crea.
            let $errorMsj = document.createElement("p");
            $errorMsj.innerHTML= mensaje;
            $errorMsj.classList.add("error-msj");        
            input.parentElement.appendChild($errorMsj);
        }
            
        // aca muestro el icono de error
        if(input.parentElement.querySelector(".error-icon") == null){
            let $errorIcon = document.createElement("i");
            $errorIcon.classList.add("bi", "bi-exclamation-circle-fill", "error-icon");        
            input.parentElement.appendChild($errorIcon);
        }
    }


};

