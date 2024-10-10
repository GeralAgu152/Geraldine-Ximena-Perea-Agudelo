
import{Header} from '../header/Header'
import{Producto} from './Producto'
import{Footer} from '../pie-pagina/Footer'
import {useEffect} from 'react'
import {useState} from 'react'




export function Menu(){



 const [pedidos, setPedidos] = useState([]);
   const [id_usuario, setId_usuario] = useState("");
   const [id_mesa, setId_mesa] = useState("");
   const [id_estado, setId_estado] = useState("");
   const [productos_pedidos, setProductos_pedidos] = useState([]);




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
    body:JSON.stringify({id_usuario,id_mesa,id_estado,productos,metodo}),
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


return(

 <>


<Header/>
 

<section className="imagen-header">
 <h1>Menú diario</h1> 
</section>
<Producto/>


<div  >
    <form action=""  onSubmit={ ENVIARDATOS}>
      <h1>Registrarse</h1>

      <div >
        <input type="text" value={id_usuario} onChange={(e) => setId_usuario(e.target.value)}placeholder="Nombre" required/> 
      </div>


      <div >
        <input type="text" value={id_mesa} onChange={(e) => setId_mesa(e.target.value)} placeholder="Numero mesa" required/>
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

<Footer/>


 </>

)
}