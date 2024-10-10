 
import {Header} from '../header/Header'
import {Footer} from '../pie-pagina/Footer'
import baso from './imagenes/baso.jpg'
import te from './imagenes/te.jpg'
import malteadas from './imagenes/malteadas.png'
import rollitos from './imagenes/rollitos.jpg'


export function Bebidas(){
   
let carritoVisible = false;



let botonesEliminarItem = document.getElementsByClassName('btn-eliminar')
for(let i=0; i < botonesEliminarItem.length;i++){
    let button = botonesEliminarItem[i];
    button.addEventListener('click', eliminarItemCarrito);
}


/*Agregamos funcionalidad al buton restar cantidad*/
    var botonesRestarCantidad = document.getElementsByClassName('restar-cantidad');
    for(var i=0;i<botonesRestarCantidad.length; i++){
        var button = botonesRestarCantidad[i];
        button.addEventListener('click',restarCantidad);
}

/*Agregamos funcionalidad al boton Agregar al carrito*/
    let botonesAgregarAlCarrito = document.getElementsByClassName('boton-item');
    for(var i=0; i<botonesAgregarAlCarrito.length;i++){
        var button = botonesAgregarAlCarrito[i];
        button.addEventListener('click', agregarAlCarritoClicked);
 }

 /*Agregamos funcionalidad al boton sumar cantidad*/
    var botonesSumarCantidad = document.getElementsByClassName('sumar-cantidad');
    for(var i=0;i<botonesSumarCantidad.length; i++){
        var button = botonesSumarCantidad[i];
        button.addEventListener('click',sumarCantidad);
}







/*Eliminamos todos los elementos del carrito y lo ocultamos*/
function pagarClicked(){
    alert("Gracias por la compra");
    //Elimino todos los elmentos del carrito
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    while (carritoItems.hasChildNodes()){
        carritoItems.removeChild(carritoItems.firstChild)
    }
    actualizarTotalCarrito();
    ocultarCarrito();

 /*Agregamos funcionalidad al botón comprar*/
     document.getElementsByClassName('btn-pagar')[0].addEventListener('click',pagarClicked)
    }

/*Resto en uno la cantidad del elemento seleccionado*/
function restarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual--;
    if(cantidadActual>=1){
        selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
        actualizarTotalCarrito();
    }
}


function eliminarItemCarrito(event){
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  /*Actualiza el total*/
  actualizarTotalCarrito();

  ocultarCarrito();
}


/*Aumentamos en uno la cantidad del elemento seleccionado*/
function sumarCantidad(event){
    var buttonClicked = event.target;
    var selector = buttonClicked.parentElement;
    console.log(selector.getElementsByClassName('carrito-item-cantidad')[0].value);
    var cantidadActual = selector.getElementsByClassName('carrito-item-cantidad')[0].value;
    cantidadActual++;
    selector.getElementsByClassName('carrito-item-cantidad')[0].value = cantidadActual;
    actualizarTotalCarrito();
}


/*Funciòn que controla el boton clickeado de agregar al carrito*/
function agregarAlCarritoClicked(event){
    var button = event.target;
    var item = button.parentElement;
    var titulo = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    console.log(imagenSrc);

    agregarItemAlCarrito(titulo, precio, imagenSrc);
    hacerVisibleCarrito();
}


/*Funcion que hace visible el carrito*/
function hacerVisibleCarrito(){
    carritoVisible = true;
    var carrito = document.getElementsByClassName('carrito')[0];
    carrito.style.marginRight = '0';
    carrito.style.opacity = '1';

    var items =document.getElementsByClassName('contenedor-items')[0];
    items.style.width = '60%';
}



/*Funciòn que agrega un item al carrito*/
function agregarItemAlCarrito(titulo, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    /*controlamos que el item que intenta ingresar no se encuentre en el carrito*/
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==titulo){
            alert("El item ya se encuentra en el carrito");
            return;
        }else{
            
        }
    }

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${titulo}</span>
                <div class="selector-cantidad">
                    <i class="fa-solid fa-minus restar-cantidad"></i>
                    <input type="text" value="1" class="carrito-item-cantidad" disabled>
                    <i class="fa-solid fa-plus sumar-cantidad"></i>
                </div>
                <span class="carrito-item-precio">${precio}</span>
            </div>
            <button class="btn-eliminar">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `
    item.innerHTML = itemCarritoContenido;
    itemsCarrito.append(item);

    /*Agregamos la funcionalidad eliminar al nuevo item*/
     item.getElementsByClassName('btn-eliminar')[0].addEventListener('click', eliminarItemCarrito);

    /*Agregamos al funcionalidad restar cantidad del nuevo item*/
    var botonRestarCantidad = item.getElementsByClassName('restar-cantidad')[0];
    botonRestarCantidad.addEventListener('click',restarCantidad);

    /*Agregamos la funcionalidad sumar cantidad del nuevo item*/
    var botonSumarCantidad = item.getElementsByClassName('sumar-cantidad')[0];
    botonSumarCantidad.addEventListener('click',sumarCantidad);

    /*Actualizamos el total*/
    actualizarTotalCarrito();
}


/*Funciòn que controla si hay elementos en el carrito. Si no hay oculto el carrito.*/
function ocultarCarrito(){
    var carritoItems = document.getElementsByClassName('carrito-items')[0];
    if(carritoItems.childElementCount==0){
        var carrito = document.getElementsByClassName('carrito')[0];
        carrito.style.marginRight = '-100%';
        carrito.style.opacity = '0';
        carritoVisible = false;
    
        var items =document.getElementsByClassName('contenedor-items')[0];
        items.style.width = '100%';
    }
}




/*Actualizamos el total de Carrito*/
function actualizarTotalCarrito(){
    //seleccionamos el contenedor carrito
    var carritoContenedor = document.getElementsByClassName('carrito')[0];
    var carritoItems = carritoContenedor.getElementsByClassName('carrito-item');
    var total = 0;
    //recorremos cada elemento del carrito para actualizar el total
    for(var i=0; i< carritoItems.length;i++){
        var item = carritoItems[i];
        var precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
        //quitamos el simobolo peso y el punto de milesimos.
        var precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
        var cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
        console.log(precio);
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;

    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";
} 

    return(

        <>

<Header/>



 <div className="principal">
<section className="imagen-header">
<h1>Bebidas</h1>
</section>
<section className="contenedor">
{/*Contenedor de elementos */}
        <section className="contenedor-items">
            <article className="item">
                <span className="titulo-item">Cappuccino</span>
                <img src= {baso}  alt="" className="img-item"/>
                <span className="precio-item">$3.000</span>
                <button className="boton-item" onClick={agregarAlCarritoClicked}>Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Te helado</span>
                <img src={te} alt="" className="img-item"/>
                <span className="precio-item">$2.000</span>
                <button className="boton-item" onClick={agregarAlCarritoClicked}>Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Rollo de canela</span>
                <img src={rollitos} alt="" className="img-item"/>
                <span className="precio-item">$5.000</span>
                <button className="boton-item" onClick={agregarAlCarritoClicked}>Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Malteadas</span>
                <img src={malteadas} alt="" className="img-item"/>
                <span class="precio-item">$8.000</span>
                <button className="boton-item"onClick={agregarAlCarritoClicked}>Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Te helado</span>
                <img src="imagenes/te.jpg" alt="" className="img-item"/>
                <span className="precio-item">$2.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Rollo de canel</span>
                <img src="imagenes/rollitos-canela.jpg" alt="" className="img-item"/>
                <span className="precio-item">$5.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Te helado</span>
                <img src="imagenes/te.jpg" alt="" className="img-item"/>
                <span className="precio-item">$2.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Malteadas</span>
                <img src="imagenes/malteadas.png" alt="" className="img-item"/>
                <span className="precio-item">$8.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </article>
            <article className="item">
                <span className="titulo-item">Rollo de canel</span>
                <img src="imagenes/rollitos-canela.jpg" alt="" className="img-item"/>
                <span className="precio-item">$5.800</span>
                <button className="boton-item">Agregar al Carrito</button>
            </article>
          
        </section>
        {/*Carrito de Compras*/}
        <section className="carrito" id="carrito">
            <article className="header-carrito">
                <h2>Tu Carrito</h2>
            </article>

            <section className="carrito-items">
                {/*
                <div class="carrito-item">
                    <img src="img/boxengasse.png" width="80px" alt="">
                    <section class="carrito-item-detalles">
                        <span class="carrito-item-titulo">Box Engasse</span>
                        <article class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad" onClick={restarCantidad}></i>
                            <input type="text" value="1" class="carrito-item-cantidad" disabled>
                            <i class="fa-solid fa-plus sumar-cantidad" onClick={sumarCantidad}></i>
                        </article>
                        <span class="carrito-item-precio">$15.000,00</span>
                    </section>
                   <span class="btn-eliminar"onClick={eliminarItemCarrito}>
                        <i class="fa-solid fa-trash"></i>
                   </span>
                </div>
                <div class="carrito-item">
                    <img src="img/skinglam.png" width="80px" alt="">
                    <section class="carrito-item-detalles">
                        <span class="carrito-item-titulo">Skin Glam</span>
                        <article class="selector-cantidad">
                            <i class="fa-solid fa-minus restar-cantidad" onClick={restarCantidad}></i>
                            <input type="text" value="3" class="carrito-item-cantidad" disabled>
                            <i class="fa-solid fa-plus sumar-cantidad" onClick={sumarCantidad}></i>
                        </article>
                        <span class="carrito-item-precio">$18.000,00</span>
                    </section>
                   <button class="btn-eliminar"onClick={eliminarItemCarrito}>
                        <i class="fa-solid fa-trash"></i>
                   </button>
                </div>
                */}
            </section>

            <section className="carrito-total">
                <article className="fila">
                    <strong>Tu Total</strong>
                    <span className="carrito-precio-total">
                        $120.000,00
                    </span>
                </article>
                <button className="btn-pagar" onClick={pagarClicked}>Realizar pedido <i className="fa-solid fa-bag-shopping"></i> </button>
            </section>
        </section>
    </section>

</div>

 
 <Footer/>

</>
    )
}