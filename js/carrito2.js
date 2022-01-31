export default function carrito(){

    let $carritoIcon = document.querySelector(".carrito-div");
    let $carritoContainer = document.querySelector(".carrito");
    let $carrito = document.querySelector(".carrito table");
    let carrito = localStorage.getItem("rockHouse");
    carrito = JSON.parse(carrito);



    carritoNumber(carrito);
    pintarCarrito(carrito);



    $carritoIcon.addEventListener("click",()=>{
        $carritoContainer.classList.toggle("carrito-active");
        console.log("se disparo el evento")
    });


    //funcion que pinta el numero del carrito

    function carritoNumber(carrito){
        let $carritoNumber = document.querySelector(".number p")
        $carritoNumber.innerHTML = carrito.length;
    }


    //funcion que elimina elementos del carrito
    
    document.addEventListener("click", (event)=>{

        // si se clickea en un elemento con la clase quitar lo elimina del array de changuito y lo borra del dom.
    if(event.target.matches(".quitar")){



        carrito.splice(event.target.id,1);

        //asigno el contenido de localStorage a la variable guardado y la transformo en un array de objetos que se llama guardados
        let guardados = localStorage.getItem("rockHouse");
        //transformo el contenido de guardados a un array de objetos
        guardados = JSON.parse(guardados);

        //al array de guardados le elimino el elemento borrado
        guardados.splice(event.target.id,1);

        //actualizo el localstorage de nuevo. transformo el contenido de guardado a tipo string.
        localStorage.setItem("rockHouse", JSON.stringify(guardados));

        pintarCarrito(guardados);
        carritoNumber(guardados);

    }

})




    //funcion que pinta los elementos dentro del carrito
    function pintarCarrito(ProductosCargados){

        //LIMPIO al carrito y le agrego el table head con cada vez que se pinta el carrito
        $carrito.innerHTML =`<tr>
        <th>Artista</th>
        <th>Fecha</th>
        <th>Ubicacion</th>
        <th>Precio</th>
        <th></th>
    </tr>`;
        
        let conta = -1
        let total = 0; 

        if(ProductosCargados.length == 0){
            let $mensaje = document.createElement("h3");
            $mensaje.innerHTML = "No hay productos cargados en el Carrito"
            document.querySelector(".carrito").appendChild($mensaje);
        }else{
            let $mensaje = document.querySelector(".carrito h3")
            if($mensaje){
                document.querySelector(".carrito").removeChild($mensaje);
            }
        }


        ProductosCargados.forEach(producto =>{

            // por cada objeto dentro de productosCargados creo una fila nueva
            let $newRow = document.createElement("tr");
            $newRow.classList.add("row");
        
            // por cada elemento dentro de cada objeto producto creo un td con el valor de cada uno de los elementos del objeto
            for( let clave in producto ){
                let $newTd = document.createElement("td")
                $newTd.innerHTML = producto[clave];
                $newRow.appendChild($newTd)
            }

            // creo un boton con el id del objeto correspondiente y se lo pego a la fila como hijo.
            $newRow.removeChild($newRow.lastChild)
            let $newButton = document.createElement("button");
            $newButton.classList.add("quitar")
            $newButton.innerHTML= "Quitar del carrito";
            conta = conta + 1
            $newButton.id = conta;
            let $newTd = document.createElement("td");
            $newTd.appendChild($newButton);
            $newRow.appendChild($newTd);

                // le pego la fila a la tabla de carrito
            
            $carrito.appendChild($newRow);

            //sumo el precio de cada producto cargado al carrito
            total = total + producto.precio;
        })

        //le pego el precio total de la suma de los productos cargados

        if(!document.querySelector(".carrito p")){ //si no hay un mensaje de total creo uno, sino, lo borro y sustituyo su contenido.
            let $productosTotales = document.createElement("p");
            $productosTotales.innerHTML = `El total de tu compra es : $${total}`;
            let $carritoDiv = document.querySelector(".carrito");
            $carritoDiv.appendChild($productosTotales);
        }else{
            let $productosTotales = document.querySelector(".carrito p");
            document.querySelector(".carrito").removeChild($productosTotales);

            $productosTotales = document.createElement("p");
            $productosTotales.innerHTML = `El total de tu compra es : $${total}`;
            document.querySelector(".carrito").appendChild($productosTotales);
        }



    }


}