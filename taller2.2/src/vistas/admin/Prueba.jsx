

import {useState} from 'react'
import {useEffect} from 'react'
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import $ from "jquery"
import Swal from 'sweetalert2'

export function Prueba(){

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
 
if ($.fn.DataTable.isDataTable("#myTable")){
    $("#myTable").DataTable().destroy();
}

  $("#myTable").DataTable({
    data: usuarios,
    columns: [
        {data: "id_usuario"},
        {data: "nombre"},
        {data: "tipo_documento"},
        {data: "numero_documento"},
        {data: "email"},
        {data: "contrasena"},
        {data: "id_rol"},
        {data: null},
        {data: null}
    ],
  });
},[]);



    return(

  

<>

<h1>Prueba</h1>

<div onSubmit={modo ? ACTUALIZAR : ENVIARDATOS}>
    <form action="">
      <h1>Registrarse</h1>

      <div >
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}placeholder="Nombre" required/> 
      </div>

      <div >
       <select  value={tipo_documento} onChange={(e) => setTipo_documento(e.target.value)}>
         <option value="">Tipo de documento</option>
         <option value="cedula  cuidadan">Cedula cuidadana </option>
         <option value="tarjeta de identidad">Tarjeta de identidad</option>
         <option value="cedula  de extranjeria">Cedula de extrajeria </option>
        </select>
      </div>

      <div >
        <input type="numbre" value={numero_documento} onChange={(e) => setNumero_documento(e.target.value)} placeholder="Numero de documento" required/>
      </div>

      <div >
        <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electronico" required/>
      </div>

      <div >
      
         <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" required/>
      </div> 
      <div >
        <select  value={id_rol} onChange={(e) => setId_rol(e.target.value)} >
          <option>Seleccione el rol</option>
          <option value="administrador">Administrador</option>
          <option value="cajero">Cajero</option>
          <option value="cliente">Cliente</option>
          <option value="mesero">Mesero</option>
          <option value="chef">Chef</option>
        </select>
      </div>

      <button type="submit" >{modo ? "ACTUALIZAR" : "ENVIAR"}</button>

    </form>
  </div>




<table id="myTable" class="display"> 
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
</>

);
}