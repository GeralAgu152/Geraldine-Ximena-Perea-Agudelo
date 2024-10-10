
import './estilos/estilos-producto.css'
import rollo from './imagenes/rollo.jpg'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useState } from 'react'
import {useEffect} from 'react'
import descarga from '../formularios/imagenes/descarga.png'

export function Producto({id_mesa,setId_mesas, user,setUser}){

const [productos, setProductos] = useState([]);
const [nombre, setNombre] = useState("");
const [categoria, setCategoria] = useState("");
const [precio, setPrecio] = useState("");
const [stock, setStock] = useState("");
const [descripcion, setDescripcion] = useState("");
const [imagen, setImagen] = useState("");
const [id_producto, setId_producto] = useState(null);


 const [pedidos, setPedidos] = useState([]);
   
   const [id_estado, setId_estado] = useState("");
   const [productos_pedidos, setProductos_pedidos] = useState("");
    const [total, setTotal] = useState("");




const images = [
{
    original: "https://cdn.colombia.com/sdi/2019/03/29/cual-es-el-desayuno-preferido-por-los-colombianos-723385.jpg"
},
{
    original: "https://www.campi.com.co/wp-content/uploads/2022/11/desayunos-colombianos-campi.jpg"
},
{
    original: "https://tienda.pasteleriamilhojaldres.com.co/326-large_default/desayuno-colombiano.jpg"
}

]

  
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
    var nombre = item.getElementsByClassName('titulo-item')[0].innerText;
    var precio = item.getElementsByClassName('precio-item')[0].innerText;
    var imagenSrc = item.getElementsByClassName('img-item')[0].src;
    

    agregarItemAlCarrito(nombre, precio, imagenSrc);
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
function agregarItemAlCarrito(nombre, precio, imagenSrc){
    var item = document.createElement('div');
    item.classList.add = ('item');
    var itemsCarrito = document.getElementsByClassName('carrito-items')[0];

    /*controlamos que el item que intenta ingresar no se encuentre en el carrito*/
    var nombresItemsCarrito = itemsCarrito.getElementsByClassName('carrito-item-titulo');
    for(var i=0;i < nombresItemsCarrito.length;i++){
        if(nombresItemsCarrito[i].innerText==nombre){
            alert("El item ya se encuentra en el carrito");
            return;
        }else{
            
        }
    }

    var itemCarritoContenido = `
        <div class="carrito-item">
            <img src="${imagenSrc}" width="80px" alt="">
            <div class="carrito-item-detalles">
                <span class="carrito-item-titulo">${nombre}</span>
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
    actualizarTotalCarrito(total);

  
    
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
function actualizarTotalCarrito(total){
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
        
        var cantidad = cantidadItem.value;
        total = total + (precio * cantidad);
    }
    total = Math.round(total * 100)/100;
   
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$'+total.toLocaleString("es") + ",00";


  

}  





const ENVIARDATOS = async (e) =>{
  e.preventDefault();
   const metodo = "insertar"
  const url = await fetch(
   "http://localhost/Conexion_db/controlador/pedidos/pedidosControlador.php",
   {
    method: "POST",
    headers:{
         "Content-Type": "application/json",
    },
    body:JSON.stringify({id_usuario,id_mesa,id_estado,productos_pedidos,metodo}),
   }

);

const respuesta = await url.json();
     if(respuesta.estado){
Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
  }
}


const OBTENERPRODUCTOS = async () =>{

    const url = await fetch(
      "http://localhost/Conexion_db/controlador/productos/productosControlador.php"
        );
    const respuesta = await url.json();
   // console.log(respuesta)
    setProductos(respuesta)
}



useEffect(()=>{
    OBTENERPRODUCTOS ();
},[]);

 return(

<>




<div className="principal">


<section className="contenedor">
{/*Contenedor de elementos */}
        <section className="contenedor-items">
        {productos.map((productos)=>(
            <article className="item" key={productos.id_producto}>
                <span className="titulo-item">{productos.nombre}</span>
                <img src={descarga} alt="" className="img-item"/>
                <span className="precio-item">{productos.precio}</span>
                <button className="boton-item" onClick={agregarAlCarritoClicked}>Agregar al Carrito</button>
        
            </article>

            ))}

       
        </section>
    

 

{/*Carrito de Compras*/}
        <section className="carrito " id="carrito">
            <article className="header-carrito">
                <h2>Tu Carrito</h2>
            </article>

            <section className="carrito-items">
                {/*
                <div className="carrito-item" >
                    <img src={baso} width="80px" alt=""/>
                    <section className="carrito-item-detalles">
                        <span className="carrito-item-titulo">Cappuccino</span>
                        <article className="selector-cantidad">
                            <i className="fa-solid fa-minus restar-cantidad" onClick={restarCantidad}></i>
                            <input type="text" value="1" className="carrito-item-cantidad" disabled/>
                            <i className="fa-solid fa-plus sumar-cantidad" onClick={sumarCantidad}></i>
                        </article>
                        <span className="carrito-item-precio" >$15.000,00</span>
                    </section>
                   <span className="btn-eliminar" onClick={eliminarItemCarrito}>
                        <i className="fa-solid fa-trash"></i>
                   </span>
                </div>


                <div className="carrito-item">
                    <img src={te} width="80px" alt=""/>
                    <section className="carrito-item-detalles">
                        <span className="carrito-item-titulo">Te helado</span>
                        <article className="selector-cantidad">
                            <i className="fa-solid fa-minus restar-cantidad" onClick={restarCantidad}></i>
                            <input type="text" value="3" className="carrito-item-cantidad" disabled/>
                            <i className="fa-solid fa-plus sumar-cantidad" onClick={sumarCantidad}></i>
                        </article>
                        <span className="carrito-item-precio">$18.000,00</span>
                    </section>
                   <button className="btn-eliminar"  onClick={eliminarItemCarrito}>
                        <i className="fa-solid fa-trash"></i>
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
                <button className="btn-pagar" onClick={pagarClicked }>Realizar pedido <i className="fa-solid fa-bag-shopping"></i> </button>
            </section>
        </section>

    </section>



<div  >
    <form action=""  onSubmit={ ENVIARDATOS}>
      <h1>Registrarse</h1>

      <div >
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)}placeholder="Nombre" required/> 
      </div>


      <div >
        <input type="text" value={id_mesa} onChange={(e) => setId_mesas(e.target.value)} placeholder="Numero mesa" required/>
      </div>

      <div >
        <input type="text"  value={id_estado} onChange={(e) => setId_estado(e.target.value)} placeholder="Estado" required/>
      </div>

      <div >
        <input type="text" value={productos_pedidos} onChange={(e) => setProductos_pedidos(e.target.value)} placeholder="Productos" required/>
      </div>
        
 

      <button type="submit" >enviar</button>

    </form>
  </div>


  <div className="imagen-slider">
    <ImageGallery
       items={images}
     />
  </div>

</div>
 </>
 )
}