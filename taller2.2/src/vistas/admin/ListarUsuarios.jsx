
import {Header} from '../header/Header'
import {Footer} from '../pie-pagina/Footer'
import './estilos/estilos.css'
import {useState} from 'react'
import {useEffect} from 'react'
import Swal from 'sweetalert2'


export function ListarUsuarios(){

 const [usuarios, setUsuarios] = useState([]);
   const [nombre, setNombre] = useState("");
   const [tipo_documento, setTipo_documento] = useState("");
   const [numero_documento, setNumero_documento] = useState("");
   const [email, setEmail] = useState("");
   const [contrasena, setContrasena] = useState("");
   const [id_rol, setId_rol] = useState("");
   const [id_usuario, setId_usuario] = useState(null);
const [modo, setModo] = useState(false);

 

const OBTENERUSUARIOS = async () =>{
     
    const url = await fetch(
      "http://localhost/Conexion_db/controlador/admin/adminControlador.php"
      );
    const respuesta = await url.json();
    console.log(respuesta)
    setUsuarios(respuesta)

}






const ENVIARDATOS = async (e) =>{
  e.preventDefault();
   const metodo = "insertar"
  const url = await fetch(
   "http://localhost/Conexion_db/controlador/admin/adminControlador.php",
   {
    method: "POST",
    headers:{
         "Content-Type": "application/json",
    },
    body:JSON.stringify({nombre,tipo_documento,numero_documento,email,contrasena,id_rol, metodo}),
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







const ACTUALIZAR = async () =>{
 
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


const ELIMINARDATOS = async (usuarios) =>{
   
   setId_usuario(usuarios.id_usuario);
  
  try{
    const metodo = "eliminar"
  const url = await fetch(
   "http://localhost/Conexion_db/controlador/admin/adminControlador.php",
   {
    method: "POST",
    headers:{
         "Content-Type": "application/json",
    },
    body:JSON.stringify({id_usuario, metodo}),
   }

);
} catch ( error) {

}
}


useEffect(() => {
  OBTENERUSUARIOS();
 

},[]);



return(

<>

<Header/>

<div className="registrar_usuarios">

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
         <option value="cedula  cuidadan">Cedula cuidadana </option>
         <option value="tarjeta de identidad">Tarjeta de identidad</option>
         <option value="cedula  de extranjeria">Cedula de extrajeria </option>
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
        
      <div className="input-box">
        <select class="selecionar-rol" value={id_rol} onChange={(e) => setId_rol(e.target.value)} >
          <option>Seleccione el rol</option>
          <option value="administrador">Administrador</option>
          <option value="cajero">Cajero</option>
          <option value="cliente">Cliente</option>
          <option value="mesero">Mesero</option>
          <option value="chef">Chef</option>
        </select>
      </div>

      <button type="submit" className="btn_listar">{modo ? "ACTUALIZAR" : "ENVIAR"}</button>

    </form>
  </div>








<section   className="tabla-usuarios">
<table> 
<thead> 
<tr> 
<th>ID</th>
<th>NOOMBRE</th>
<th>TIPO DOCUMENTO</th>
<th>NUMERO DOCUMENTO</th>
<th>CORREO</th>
<th>CONTRASEÑA</th>
<th>ROL</th>
<th>EDITRAR</th>
<th>ELIMINAR</th>


</tr>
</thead>

<tbody> 
{usuarios.map((usuarios)=>(
<tr key={usuarios.id_usuario}> 
<td>{usuarios.id_usuario}</td>
<td>{usuarios.nombre}</td>
<td>{usuarios.tipo_documento}</td>
<td>{usuarios.numero_documento}</td>
<td>{usuarios.email}</td>
<td>{usuarios.contrasena}</td>
<td>{usuarios.id_rol}</td>
<td> <button type="submit" onClick={() => EDITARUSUARIO(usuarios)}>Editar</button></td>
<td> <button type="submit" onClick={() => ELIMINARDATOS(usuarios)}>Eliminar</button></td>
</tr>
 ))}
</tbody>
</table>
</section>



</div>


<Footer/>

  


</>

 );

}