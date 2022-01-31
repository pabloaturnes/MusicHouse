export default function carrito(){

    let $carritoIcon = document.querySelector(".carrito-div");
    let $carrito = document.querySelector(".carrito");


    $carritoIcon.addEventListener("click",()=>{

        $carrito.classList.toggle("carrito-active");
        console.log("se disparo el evento")
    });


    

}