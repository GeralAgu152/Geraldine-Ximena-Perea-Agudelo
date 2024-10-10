
import {Header} from '../header/Header'
import {Footer} from '../pie-pagina/Footer'
import './estilos/estilos-mesas.css'

import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"
import {useEffect} from 'react'
import {useState} from 'react'
import React from 'react';


export function Mesas ({user, setUser}){
 

const [mesas, setMesas] = useState([]);
const [id_mesa, setId_mesas] = useState(null);
const [numero_mesa, setNumero_mesa] = useState('');
const [addMesas, setAddMesas] = useState([]);


const [isButtonClicked, setIsButtonClicked] = useState(false);



     
  
  const handlelogout = async () =>{

   
    const url = await fetch(
      "http://localhost/conexion_db/controlador/login/cerrar.php"
      );
    const respuesta = await url.json();
    setUser([])
    
  }
 
  const SESSION = async () =>{

   
    const url = await fetch(
      "http://localhost/conexion_db/controlador/login/logueado.php"
      );
      const respuesta = await url.json();
      console.log(respuesta[0]);
    
  }
 

 




const OBTENERMESAS = async () =>{

    const url = await fetch(
      "http://localhost/Conexion_db/controlador/mesas/mesasControlador.php"
        );
    const respuesta = await url.json();
    console.log(respuesta)
    setMesas(respuesta)
}


const images = [
  {
     original: "https://st3.depositphotos.com/3728439/32957/i/450/depositphotos_329570356-stock-photo-colombian-style-beans-and-rice.jpg"
  },

  {
     original: "https://www.tropicanafm.com/wp-content/uploads/2024/01/16012024-Corrientazo.png"
  },

  {
     original: "https://colombiavisible.com/wp-content/uploads/2021/12/Hallacas-1024x576.jpg"
     
  }
]



 function cambiarColor_btn1(){
  let botonmesa= document.getElementById("btnmesa");
  let boton1= document.getElementById("mesa1");

for(let i=0; i < boton1.length; i++ ){
  boton1.style="background: red;  color: white;"
   botonmesa.style="background: blue;"  

   if(boton1[i]){
    alert("no puede seleccionar mas de una mesa");
    return;
   }else{
    
   }
}


 } 
 


  
 function cambiarColor_boton(){
let botonmesero= document.getElementById("btnmesero");
  botonmesero.style="background: blue;"
  alert("se colicita el mesero en la mesa numero: ")
   botonmesero.style="background-color: rgb(0, 119, 255);"
 }

    function alerta_boton(){
   alert('ha seleccionado la mesa numero: '+ id_mesa);
  
 }

const ENVIARMESA = async (e) =>{
  e.preventDefault();
   const metodo = "insertar"
  const url = await fetch(
   "http://localhost/Conexion_db/controlador/mesas/mesasControlador.php",
   {
    method: "POST",
    headers:{
         "Content-Type": "application/json",
    },
    body:JSON.stringify({numero_mesa, metodo}),
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



const Clicked = (id_mesa) => {
  setId_mesas(id_mesa);
  setIsButtonClicked(true);
  localStorage.setItem("id_mesa",id_mesa);
const Nmesa =localStorage.getItem("id_mesa")
  

};











useEffect(()=>{
  OBTENERMESAS ();
},[]);



 return(
  <>


<Header/>




<div className="imagen-fondo">
  
  <h1>{user}</h1>
  <h2>{SESSION}</h2>
  <button onClick={handlelogout}>Salir</button>
<section className="mesas">

  <h2>Mesas</h2>
    <section className="dispo">
      <h4>Mesas disponibles:</h4> <h4>Mesas no dispinobles:</h4> 
      <div className="verde"></div>
      <div className="rojo"></div>
    </section>
    



   
 <div className="grupo1">
{mesas.map((mesas)=>(
    <article key={mesas.id_mesa}>
    <button className="boton1"  id="mesa1"  onClick={() => Clicked(mesas.id_mesa) }style={{backgroundColor: id_mesa == mesas.id_mesa ? 'red' : 'rgb(18, 221, 18)'}}>{mesas.numero_mesa}</button>
  </article>

   ))}

    
    </div>


<section className="botones">

      <article >
         <button className="btn-seleccionar_mesa" id="btnmesa" onClick={alerta_boton} style={{backgroundColor: isButtonClicked ? 'blue' : '#BDE038'}} >Seleccionar Mesa</button>
       </article>
   </section>
 </section>

 

<div className="slider">
  <ImageGallery
  items={images}
    />
</div>


</div>
 

<Footer/>

    
   </>

 )


}