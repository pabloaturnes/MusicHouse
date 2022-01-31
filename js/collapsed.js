export default function collapsed(){

const $cards = document.querySelectorAll(".card");


$cards.forEach(card =>{


    card.addEventListener("mouseover", ()=>{
        console.log("se disparo el evento");

        let $datesContainer = card.querySelector(".dates-container");
        

        $datesContainer.classList.toggle("collapsed");

    })


    card.addEventListener("mouseout", ()=>{
        console.log("se disparo el evento");

        let $datesContainer = card.querySelector(".dates-container");
        

        $datesContainer.classList.toggle("collapsed");

    })





})






}