export default function scrollSpy(){

    let $arrowButton = document.querySelector(".arrow-up");

    // el breakpoint que se observará (seccion skills)
    const $skillsBreakpoint = document.querySelector(".news");
    // el segundo breakpoint que se observara (seccion welcome)
    const $welcomeBreakpoint = document.querySelector(".intro");


    //creamos una callback para facilitar el manejo del objeto observador
    const cb = (objetoObservado)=>{
        
    
        //objeto observado es un array que tiene una coleccion de objetos dentro.
        // por cada uno de los objetos que tiene preguntamos si la variable isIntercepting es verdadera, es decir si lo ha interceptado.
        objetoObservado.forEach(entry => {

            if(entry.isIntersecting){

                if(entry.target == $welcomeBreakpoint)
                $arrowButton.classList.remove("arrow-active");

                if(entry.target == $skillsBreakpoint)
                $arrowButton.classList.add("arrow-active");
            }
            
        });


    }

    //creamos un objeto observador, tiene como parametro una callback y un objeto que servira para setear las propiedades del objeto
    const observer = new IntersectionObserver(cb,{
        threshold: ".35"
    });

    // utilizamos la funcion observe del objeto y le asignamos como parametro el elemento que queremos observar
    observer.observe($skillsBreakpoint);
    observer.observe($welcomeBreakpoint);
}