

export default function table(){


    const products = [
        {
        nombre: "Dua Lipa",
        fecha:"02/02/2022",
        ubicacion: "Londres",
        precio: 100,
        id : 0
        },

        {
        nombre: "Dua Lipa",
        fecha:"11/03/2022",
        ubicacion: "Woodstock",
        precio: 100,
        id : 1
        },
    
        {
        nombre: "Dua Lipa",
        fecha:"15/04/2022",
        ubicacion: "Gadwick",
        precio: 100,
        id : 2
        },
    
        {
        nombre: "Dua Lipa",
        fecha:"20/06/2022",
        ubicacion: "Paris",
        precio: 100,
        id : 3
        },
    
        {
        nombre: "Dua Lipa",
        fecha:"19/07/2022",
        ubicacion: "Miami",
        precio: 100,
        id : 4
        },

        {
        nombre: "Joao Misterio",
        fecha:"22/03/2022",
        ubicacion: "Sao Paulo",
        precio: 150,
        id : 5
        },

        {
        nombre: "Joao Misterio",
        fecha:"10/04/2022",
        ubicacion: "Salvador",
        precio: 150,
        id : 6
        },

        {
        nombre: "Joao Misterio",
        fecha:"13/05/2022",
        ubicacion: "Maceio",
        precio: 150,
        id : 7
        },

        {
        nombre: "Joao Misterio",
        fecha:"15/06/2022",
        ubicacion: "Rio",
        precio: 150,
        id : 8
        },

        {
        nombre: "Joao Misterio",
        fecha:"17/07/2022",
        ubicacion: "Brasilia",
        precio: 150,
        id : 9
        },

        {
        nombre: "Peter Hendrix",
        fecha:"22/04/2022",
        ubicacion: "New York",
        precio: 175,
        id : 10
        },

        {
        nombre: "Peter Hendrix",
        fecha:"24/04/2022",
        ubicacion: "New York",
        precio: 175,
        id : 11
        },

        {
        nombre: "Peter Hendrix",
        fecha:"30/04/2022",
        ubicacion: "Boston",
        precio: 175,
        id : 12
        },

        {
        nombre: "Peter Hendrix",
        fecha:"18/06/2022",
        ubicacion: "Los Angeles",
        precio: 175,
        id : 13
        },

        {
        nombre: "Peter Hendrix",
        fecha:"03/07/2022",
        ubicacion: "Las Vegas",
        precio: 175,
        id : 14
        },

        {
        nombre: "Frank Jagger",
        fecha:"17/04/2022",
        ubicacion: "Amsterdam",
        precio: 250,
        id : 15
        },

        {
        nombre: "Peter Hendrix",
        fecha:"05/04/2022",
        ubicacion: "Paris",
        precio: 250,
        id : 16
        },

        {
        nombre: "Peter Hendrix",
        fecha:"18/05/2022",
        ubicacion: "Madrid",
        precio: 250,
        id : 17
        },

        {
        nombre: "Peter Hendrix",
        fecha:"20/06/2022",
        ubicacion: "Buenos Aires",
        precio: 250,
        id : 18
        },

        {
        nombre: "Peter Hendrix",
        fecha:"08/07/2022",
        ubicacion: "Cordoba",
        precio: 250,
        id : 19
        },
    ]


    const $table = document.querySelector(".productos")
    let $carrito = document.querySelector(".carrito table");


    
    // si no hay productos cargados el array carrito estara vacio, sino sera igual a lo cargado en localStorage
    window.addEventListener("onload", ()=>{

        if(localStorage.getItem("rockHouse" == null)){
            var carrito = [];
            console.log("carrito esta vacio: ", carrito);
        }else{
            var carrito = localStorage.getItem("rockHouse");
            carrito = JSON.parse(carrito);
            console.log("carrito viene con algo: ",carrito)
        }
    
    })

    mostrarTodos();
    carritoNumber(carrito)
    pintarCarrito(carrito)
    //una vez que tengo todos los botones hago una lista con todos
    const $botonesAgregar = document.querySelectorAll(".agregar");
    
    function mostrarTodos(){

        products.forEach(product =>{

            // por cada objeto dentro de productos creo una fila nueva
            let $newRow = document.createElement("tr");
            $newRow.classList.add("row")
        
            // por cada elemento dentro de cada producto creo un td con el valor de cada uno de los elementos del objeto
            for( let clave in product ){
                let $newTd = document.createElement("td")
                $newTd.innerHTML = product[clave];
                $newRow.appendChild($newTd)
            }

            // creo un boton con el id del objeto correspondiente y se lo pego a la fila como hijo.
            $newRow.removeChild($newRow.lastChild)
            let $newButton = document.createElement("button");
            $newButton.classList.add("agregar")
            $newButton.innerHTML= "Agregar Al Carrito";
            $newButton.id= product.id;
            let $newTd = document.createElement("td");
            $newTd.appendChild($newButton);
            $newRow.appendChild($newTd);

                // le pego la fila a la tabla.
            $table.appendChild($newRow);
        })



    }


    
    $botonesAgregar.forEach(boton =>{

        boton.addEventListener("click", (event)=>{

            //aca sacamos el id del boton y lo usamos para agregarlo al array carrito.

            //la funcion filter devuelve un array, por eso cuando usamos el metodo push seleccionamos la posicion 0 del array ProductoAgregado
           let productoAgregado = products.filter(function(element){
                return element.id == event.target.id;
            });

            //hay que agregarle un codigo unico a cada objeto que agregas al array carrito para despues buscarlo por ese objeto
            //////////////////////////////////////////////////////////

            //agrego cada producto agregado al array carrito
            carrito.push(productoAgregado[0]);

            // asigno el contenido de carrito a la variable rockHouse de LocalStorage
            localStorage.setItem("rockHouse", JSON.stringify(carrito));

            //asigno el contenido de localStorage a la variable guardado y la transformo en un array de objetos que se llama guardados
            let guardados = localStorage.getItem("rockHouse");
            guardados = JSON.parse(guardados);

            //pinto el carrito con lo que hay en guardados
            pintarCarrito(guardados)

            carritoNumber(guardados);

        })

    }) 


    //eliminar elementos del carrito
    
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



    function carritoNumber(carrito){

        let $carritoNumber = document.querySelector(".number p")

        $carritoNumber.innerHTML = carrito.length;

    }


}