import '../Productos/estilos/estilos-producto.css'
import baso from '../Productos/imagenes/baso.jpg'
import te_helado from '../Productos/imagenes/te-helado.jpg'
import malteadas from '../Productos/imagenes/malteadas.png'
import rollo from '../Productos/imagenes/rollo.jpg'
import {Footer} from '../pie-pagina/Footer'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import {useState} from 'react'
import Swal from 'sweetalert2'
import {useEffect} from 'react'



export function Registro_usuarios({setUser}){


  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [tipo_documento, setTipo_documento] = useState("");
  const [numero_documento, setNumero_documento] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [id_rol, setId_rol] = useState([]);
  const [id_usuario, setId_usuario] = useState(null);
  const [modo, setModo] = useState(false);
  const [error, setError] = useState(false);

{/*


    const handleSubmit = (e) => {
    e.preventDefault()

    if(email == "" || contrasena == ""){
        setError(true)
        return
    }if(email == 'jeiner@gmail.com' && contrasena == 'jeinermorelos'){
        console.log('correcto');
    }else{
        console.log('error de usuario');
        return

    }
    setError(false)
    setUser([email])

  }
*/}





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




function mostrar_registrarse(){

let iniciar = document.getElementById("iniciar-seccion");
let registrar = document.getElementById("registrarse");
let olvidar = document.getElementById("cambiar_contrasena")

iniciar.style.display = "none";
olvidar.style.display= "none";
registrar.style.display= "block";

}

function mostrar_iniciar(){

let iniciar = document.getElementById("iniciar-seccion");
let registrar = document.getElementById("registrarse");
let olvidar = document.getElementById("cambiar_contrasena");

iniciar.style.display = "block";
registrar.style.display= "none";
olvidar.style.display= "none";
}


function mostrar_olvidar(){

let iniciar = document.getElementById("iniciar-seccion");
let registrar = document.getElementById("registrarse");
let olvidar = document.getElementById("cambiar_contrasena");

iniciar.style.display = "none";
registrar.style.display= "none";
olvidar.style.display= "block";
}




const LOGIN = async (e) =>{
  e.preventDefault();
  const metodo = "validar"
    const url = await fetch(
      "http://localhost/conexion_db/controlador/login/login.php",
      {
      method: "POST",
      headers:{
            "Content-Type": "application/json",
      },
      body:JSON.stringify({email,contrasena, metodo}),
      }
      );
    const respuesta = await url.json();
    console.log(respuesta);
  setId_rol(respuesta)
    localStorage.setItem("id_rol", respuesta.id_rol);
    const getid_rol = localStorage.getItem("id_rol");
    console.log(respuesta.id_rol)
    localStorage.setItem("nombre", respuesta.nombre);
    const getnombre = localStorage.getItem("nombre");
    console.log(respuesta.nombre)
   

  
    if(email == "" || contrasena == "" ){
        setError(true)
        return
    } if (respuesta.id_rol == undefined) {
      alert("usuario no registrado");
      return
      
    }

    setError(false)
    setUser([email])
        

}








const ENVIARDATOS = async (e) =>{
  e.preventDefault();
   const metodo = "insertar"
  const url = await fetch(
   "http://localhost/conexion_db/controlador/clientes/clienteControlador.php",
   {
    method: "POST",
    headers:{
         "Content-Type": "application/json",
    },
    body:JSON.stringify({nombre,tipo_documento,numero_documento,email,contrasena,id_rol, metodo}),
   }

);

const respuesta = await url.json();
  if(respuesta){
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  }

}


{/*

const LOGUEO = async (e) =>{
  e.preventDefault();
    const metodo = "validar"
  const url = await fetch(
  "http://localhost/Conexion_db/controlador/login/login.php",
  {
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body:JSON.stringify({email,contrasena,metodo}),

}

);

const respuesta = await url.json();

    if(email == "" || contrasena == ""){
        setError(true)
        return
    }if(email == "jeinermorelos@gmail.com" && contrasena == "jeinermor"){
        console.log('correcto');
    }else{
        alert('usuario incorrecto');
        return

    }
  
    setError(false)
    setUser([email])
    

}


*/}




const ACTUALIZAR = async (e) =>{
  e.preventDefault();
  const metodo = "actualizar"
  const url = await fetch(
  "http://localhost/Conexion_db/controlador/admin/adminControlador.php",
  {
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify({nombre,tipo_documento,numero_documento,email,contrasena,id_rol,id_usuario, metodo}),
  }

);

const respuesta = await url.json();
console.log(respuesta);

}







const EDITARUSUARIO = (usuarios)=>{
    setNombre(usuarios.nombre);
    setTipo_documento(usuarios.tipo_documento);
    setNumero_documento(usuarios.numero_documento);
    setEmail(usuarios.email);
    setContrasena(usuarios.contrasena);
    setId_rol(usuarios.id_rol);
    setId_usuario(usuarios.id_usuario);
    setModo(true);
}



useEffect(()=>{
  LOGIN();
},[]);




  return(
<>

  <div className="principal">

<div className="imagen-login">

  <div className="login-iniciar" id="iniciar-seccion">
    <form action="" onSubmit={LOGIN} >
      <h1>Iniciar seccion</h1>
      <div className="input-box">
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electronico" />
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" />
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="remember-forgot">
        <a href="#" onClick={mostrar_olvidar}>Has olvidado tu contraseña</a>
      </div>
      <button type="submit" className="btn" >Ingresar</button>
      <div className="register-link">
        <p  onClick={mostrar_registrarse}>No tienes cuenta? <a href="#">Registrarser</a></p>
      </div>
      {error && <p>TODOS LOS CAMPOS SON OBLIGATORIOS</p>}
    </form>
  </div>

  <div className="login-cambiar_contrsena" id="cambiar_contrasena">
    <form action="">
      <h1>Cambiar contraseña</h1>
      
      <div className="input-box">
        <input type="password" placeholder="Cotraseña antigua" required/>
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Contraseña nueva" required/>
        <i className='bx bxs-lock-alt' ></i>
      </div>
        <div className="input-box">
        <input type="password" placeholder="Confirmar contraseña" required/>
        <i className='bx bxs-lock-alt' ></i>
      </div>
      
      <button type="submit" className="btn">Cambiar</button>
      <div className="register-link">
        <p  onClick={mostrar_iniciar}><a href="#">Iniciar seccion</a> </p>
      </div>
    </form>
  </div>


  {/*Login de registrarse*/}
<div className="login-registrarse" id="registrarse" onSubmit={modo ? ACTUALIZAR : ENVIARDATOS}>
    <form action="">
      <h1>Registrarse</h1>
      <div className="input-box">
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}placeholder="Nombre" required/>
        
      </div>

    <div class="input-box">
    <select class="selecionar-documentos" value={tipo_documento} onChange={(e) => setTipo_documento(e.target.value)}>
          <option value="">Tipo de documento</option>
          <option value="CC">Cedula cuidadana </option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="DE">documento extrajero </option>
        </select>
      </div>
      <div className="input-box">
        <input type="numbre" value={numero_documento} onChange={(e) => setNumero_documento(e.target.value)} placeholder="Numero de documento" required/>
      </div>
            <div className="input-box">
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electronico" required/>

      </div>
        <div className="input-box">
        <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" required/>
        
      </div>
        
      {/*
        <div className="input-box" display="hidden">
        <select class="selecionar-rol" value={id_rol} onChange={(e) => setId_rol(e.target.value)}>
        <option value="administrador">Administrador</option>
        <option value="cliente">Cliente</option>
          <option value="cajero">Cajero</option>
          <option value="chef">Chef</option>
          <option value="mesero">Mesero</option>
        </select>
        
      </div>*/}

      <button type="submit" className="btn">{modo ? "ACTUALIZAR" : "Registrarse"}</button>
      <div className="register-link">
        <p onClick={mostrar_iniciar}>¿No tienes una cuenta? <a href="#">Iniciar seccion</a></p>
      </div>
    </form>
  </div>



</div>




{/*seccion de los productos */}


<section className="contenedor">
{/*Contenedor de elementos */}
        <div className="contenedor-items">
            <div className="item">
                <span className="titulo-item">Cappuccino</span>
                <img src= {baso}  alt="" className="img-item"/>
                <span className="precio-item">$3.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Te helado</span>
                <img src={te_helado} alt="" className="img-item"/>
                <span className="precio-item">$2.000</span>
                <button className="boton-item" >Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Rollo de canela</span>
                <img src={rollo} alt="" className="img-item"/>
                <span className="precio-item">$15.000</span>
                <button className="boton-item" >Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Malteadas</span>
                <img src={malteadas} alt="" className="img-item"/>
                <span className="precio-item">$8.000</span>
                <button className="boton-item" >Agregar al Carrito</button>
            </div >
            <div  className="item">
                <span className="titulo-item">Te helado</span>
                <img src="imagenes/te.jpg" alt="" className="img-item"/>
                <span className="precio-item">$2.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div >
            <div className="item">
                <span className="titulo-item">Rollo de canel</span>
                <img src="imagenes/rollitos-canela.jpg" alt="" className="img-item"/>
                <span className="precio-item">$5.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Te helado</span>
                <img src="imagenes/te.jpg" alt="" className="img-item"/>
                <span className="precio-item">$2.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
            <div className="item">
                <span className="titulo-item">Malteadas</span>
                <img src="imagenes/malteadas.png" alt="" className="img-item"/>
                <span className="precio-item">$8.000</span>
                <button className="boton-item">Agregar al Carrito</button>
            </div>
        </div>


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
                  <span className="btn-eliminar">
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
                  <button className="btn-eliminar"  >
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
                <button className="btn-pagar" >Realizar pedido <i className="fa-solid fa-bag-shopping"></i> </button>
            </section>
        </section>

    </section>



  <div>
    <ImageGallery
    items={images}/>
  </div>






</div>





<Footer/>

  
</>

);
}