
import {Header} from '../header/Header'
import {Footer} from '../pie-pagina/Footer'
import './estilos/estilos-pedido.css'
import {useEffect} from 'react'
import {useState} from 'react'
let Nmesa =localStorage.getItem("id_mesa");
let getnombre =localStorage.getItem("nombre");
export function Pedido(){

 const [pedidos, setPedidos] = useState([]);
  
  const [id_estado, setId_estado] = useState("");
   const [productos_pedidos, setProductos_pedidos] = useState([]);


console.log(getnombre);



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


const OBTENERPEDIDOS = async () =>{
  const url = await fetch(
"http://localhost/conexion_db/controlador/pedidos/pedidosControlador.php"
  );
const respuesta = await url.json();
console.log(respuesta)
setPedidos(respuesta)

}


useEffect(()=>{
  OBTENERPEDIDOS();
},[]);


    return(

  <>

<Header/>

<div className="imagen-fondo">
 
 
<section className="pedidos">

 		<h2>Pedido</h2>
   
 		{/*Numero de la mesa donde se realizo el pedido*/}


	  <p className="numeromesa"><b>Mesa: {Nmesa}</b></p>



   {/*Lista de productos que hacen parte del pedido realizado */}

  <section className="productos">
		<h5>Productos:</h5>
		<li><b>2 Mezclas de cafe: $13.000</b></li>
		<li><b>1 Pastel de frutas: $3.0000</b></li>
		<li><b>1 Expresso: $11.000</b></li>
		<li><b>3 Cappuccino: $25.500</b></li>
    </section>

  {/*Detalles del pedido*/}
  
		<p className="ultima"><b>Tiempo en estar listo: 10 minutos</b></p>
		<p className="ultima"><b>Nombre del cliente: {getnombre} </b></p>
		<p className="ultima"><b>Fecha del pedido: 11/04/2023</b></p>


       {/*Boton para añadir productos*/}
 	   <button  className="boton-añadir">Añadir producto </button>
    
   </section>




<div  >
    <form action=""  onSubmit={ ENVIARDATOS}>
      <h1>Registrarse</h1>
      <div >
        <input type="text" value={getnombre}  placeholder="Usuarios" required/>
      </div>


      <div >
        <input type="text" value={Nmesa}  placeholder="Numero mesa" required/>
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



</div>



<Footer/>

  </>

 )
}



