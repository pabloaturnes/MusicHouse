export default function menuMobile(){

    let $hamburguer = document.querySelector(".hamburguer");
    let $menu = document.querySelector("header ul");


    $hamburguer.addEventListener("click",()=>{

        $menu.classList.toggle("menu-active");

    });



}