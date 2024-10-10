
import {Header} from '../header/Header'
import {Footer} from '../pie-pagina/Footer'
import './estilos/estilos-registrar.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import {useEffect} from 'react'
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';
import $ from "jquery"
import incono from './imagenes/icono.png'




export function Registrar_productos(){
const [productos, setProductos] = useState([]);
const [nombre, setNombre] = useState("");
const [categoria, setCategoria] = useState("");
const [precio, setPrecio] = useState("");
const [stock, setStock] = useState("");
const [descripcion, setDescripcion] = useState("");
const [imagen, setImagen] = useState("");
const [id_producto, setId_producto] = useState(null);
const [modo, setModo] = useState(false);





     /*  function seleccion() {

            if (document.getElementById("option_menu_diario").selected == true) {
            OBTENERPRODUCTOS();
                document.getElementById("categoria_cafe").style.display = "none";
                document.getElementById("categoria_bebidas").style.display = "none";
                document.getElementById("categoria_expressos").style.display = "none";
                document.getElementById("categoria_extras").style.display = "none";
                document.getElementById("categoria_pastelillos").style.display = "none";
                document.getElementById("menu_diario").style.display = "block";

            }

            if (document.getElementById("option_cafe").selected == true) {
                
                document.getElementById("categoria_bebidas").style.display = "none";
                document.getElementById("categoria_expressos").style.display = "none";
                document.getElementById("categoria_extras").style.display = "none";
                document.getElementById("categoria_pastelillos").style.display = "none";
                document.getElementById("menu_diario").style.display = "none";
                document.getElementById("categoria_cafe").style.display = "block";
            //    console.log("Has seleccionado Opcion 1");

            } else if (document.getElementById("option_bebidas").selected == true) {
                CATEGORIABEBIDAS();
                document.getElementById("menu_diario").style.display = "none";
                document.getElementById("categoria_cafe").style.display = "none";
                document.getElementById("categoria_bebidas").style.display = "block";
                 document.getElementById("categoria_expressos").style.display = "none";
                 document.getElementById("categoria_extras").style.display = "none";
                 document.getElementById("categoria_pastelillos").style.display = "none";
             //   console.log("Has seleccionado Opcion 2");

            } else if (document.getElementById("option_expressos").selected == true) {
                CATEGORIAEXPRESSOS();
                document.getElementById("menu_diario").style.display = "none";
                document.getElementById("categoria_cafe").style.display = "none";
                document.getElementById("categoria_bebidas").style.display = "none";
                document.getElementById("categoria_expressos").style.display = "block";
                 document.getElementById("categoria_extras").style.display = "none";
                 document.getElementById("categoria_pastelillos").style.display = "none";
               // console.log("Has seleccionado Opción 3");

            } else if (document.getElementById("option_extras").selected == true) {

                document.getElementById("menu_diario").style.display = "none";
                document.getElementById("categoria_cafe").style.display = "none";
                document.getElementById("categoria_bebidas").style.display = "none";
                document.getElementById("categoria_expressos").style.display = "none";
                 document.getElementById("categoria_extras").style.display = "block";
                 document.getElementById("categoria_pastelillos").style.display = "none";
               // console.log("Has seleccionado Opción 3");

            } else if (document.getElementById("option_pastelillos").selected == true) {
                  CATEGORIAPASTELILLOS();
                document.getElementById("menu_diario").style.display = "none";
                document.getElementById("categoria_cafe").style.display = "none";
                document.getElementById("categoria_bebidas").style.display = "none";
                document.getElementById("categoria_expressos").style.display = "none";
                 document.getElementById("categoria_extras").style.display = "none";
                 document.getElementById("categoria_pastelillos").style.display = "block";
               // console.log("Has seleccionado Opción 3");

            }

        }*/




const OBTENERPRODUCTOS = async () =>{
       const url = await fetch(
      "http://localhost/Conexion_db/controlador/productos/productosControlador.php"
        );
    const respuesta = await url.json();
    console.log(respuesta)
    setProductos(respuesta)

}

/*
const CATEGORIAEXPRESSOS = async () =>{
       const url = await fetch(
      "http://localhost/Conexion_db/controlador/productos/cateogoriaExpressos.php"

        );
    const respuesta = await url.json();
    console.log(respuesta)
    setProductos(respuesta)


}



const CATEGORIABEBIDAS = async () =>{


    const url = await fetch(
      "http://localhost/Conexion_db/controlador/productos/categoriaBebidas.php"
        );
    const respuesta = await url.json();
    console.log(respuesta)
    setProductos(respuesta)




}


const CATEGORIAPASTELILLOS = async () =>{


    const url = await fetch(
      "http://localhost/Conexion_db/controlador/productos/categoriaPastelillos.php"
        );
    const respuesta = await url.json();
    console.log(respuesta)
    setProductos(respuesta)




}
    */





const ENVIARDATOS = async () =>{
  
  const metodo = "insertar"

  const formData = new FormData()
  formData.append("nombre", nombre)
  formData.append("categoria", categoria)
  formData.append("precio", precio)
  formData.append("stock", stock)
  formData.append("descripcion", descripcion)
  formData.append("imagen", imagen)
  formData.append("metodo", metodo)
  const url = await fetch(
   "http://localhost/Conexion_db/controlador/productos/productosControlador.php",
   {
    method: "POST",
    
    body:formData,
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

    const formData = new FormData()
  formData.append("nombre", nombre)
  formData.append("categoria", categoria)
  formData.append("precio", precio)
  formData.append("stock", stock)
  formData.append("descripcion", descripcion)
  formData.append("imagen", imagen)
  formData.append("metodo", metodo)
   formData.append("id_producto", id_producto)
  const url = await fetch(
   "http://localhost/Conexion_db/controlador/productos/productosControlador.php",
   {
    method: "POST",

    body:formData,
   }

);

const respuesta = await url.json();
 console.log(respuesta);
 

}




const EDITARPRODUCTOS = (productos)=>{
    setNombre(productos.nombre);
    setCategoria(productos.categoria);
    setPrecio(productos.precio);
    setStock(productos.stock);
    setImagen(productos.imagen);
    setDescripcion(productos.descripcion);
    setId_producto(productos.id_producto);
    setModo(true);
  
}


const ELIMINARPRODUCTOS = async (productos) =>{


  setId_producto(productos.id_producto);
  
  try{
    const metodo = "eliminar"


  const formData = new FormData()
  formData.append("nombre", nombre)
  formData.append("categoria", categoria)
  formData.append("precio", precio)
  formData.append("stock", stock)
  formData.append("descripcion", descripcion)
  formData.append("imagen", imagen)
  formData.append("metodo", metodo)
   formData.append("id_producto", id_producto)


  const url = await fetch(
   "http://localhost/Conexion_db/controlador/productos/productosControlador.php",
   {
    method: "POST",

    body:formData,
   }

);
} catch ( error) {
console.log("error al elminar");
}


}


const SELECCIONARPRODUCTO = (id_producto) =>{
  setId_producto(id_producto);
  console.log(id_producto);
}



useEffect(()=>{
    OBTENERPRODUCTOS();


    
if ($.fn.DataTable.isDataTable("#myTable")){
  $("#myTable").DataTable().destroy();
}

$("#myTable").DataTable({
  data: productos,
  columns: [
      {data: "id_producto"},
      {data: "nombre"},
      {data: "categoria"},
      {data: "precio"},
      {data: "stock"},
      {data: "descripcion"},
      {data: "imagen"},
      {data: null},
      {data: null}
  ],
}); 
},[]);


  return(

<>



<Header/>

<div className="imagen-fondo">

{/*Contenido del modul de registrar productos*/}
<div className="agregarproducto" onSubmit={modo ? ACTUALIZAR : ENVIARDATOS}>

	<form   className='formulario' enctype="multipart/form-data" >
  <h2>Registrar producto</h2>
       <label>Nombre del producto</label>
			 <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

       <label>Categoria del producto</label>
       <select  className="categoriasproducto" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
         <option>Seleccionar categoria </option>
          <option value="bebidas">Bebidas</option>
         <option value="cafe">Cafe</option>
        
         <option value="pastelillos">Pastelillos</option>
         <option value="expresos">Expressos</option>
         <option value="extras">Extras</option>
       </select>

       <label>Precio del producto</label>
       <input type="numbre" value={precio} onChange={(e) => setPrecio(e.target.value)}/>
       <label>Total de unicades</label>
       <input type="numbre" value={stock} onChange={(e) => setStock(e.target.value)}/>
       <label>Descripcion del producto</label>
        <textarea  value={descripcion} onChange={(e) => setDescripcion(e.target.value)}> </textarea>
       <label>Imagen del producto </label>
       <input type="file" onChange={(e) => setImagen(e.target.files[0])}/>
      
        <button type="submit" >{modo ? "ACTUALIZAR" : "ENVIAR"}</button>
	</form>
</div>




<div >




 <div className="contenedor-categorias">

{/*
  <div className="estilo">
  <select id="seleccion" onClick={seleccion} >
        <option id="option_menu_diario">Menu diario</option>
        <option id="option_cafe">Categoria Cafe</option>
        <option id="option_bebidas">  Categoria Bebidas</option>
        <option id="option_expressos">Categoria Expressos</option>
        <option id="option_extras">Categoria Extras</option>
        <option id="option_pastelillos">Categoria Pastelillos</option>
  </select>
</div>
*/}


<section  >

      <h4>Productos registrados menu diario</h4>
    <table id="myTable" class="display">
     

    <title>Productos registrados Menuo</title>
      <thead>
          <tr>
          <th>Id</th>
          <th>Nombre del producto</th>
          <th>Categoria del producto</th>
          <th>Precio del producto</th>
          <th>Total de unidades</th>
          <th>Descripcion del producto</th>
          <th>Imagen del producto</th>
          <th>Editar producto</th>
          <th>Eliminar producto</th>
          </tr>
      </thead>

      <tbody> 
{productos.map((productos)=>(
<tr key={productos.id_producto}> 
<td>{productos.id_producto}</td>
<td>{productos.nombre}</td>
<td>{productos.categoria}</td>
<td>{productos.precio}</td>
<td>{productos.stock}</td>
<td>{productos.descripcion}</td>
<td><img src={incono} width="80px"/></td>
<td> <button type="submit" onClick={() => EDITARPRODUCTOS (productos)}>Editar</button> </td>
<td> <button type="submit" onClick={() => ELIMINARPRODUCTOS (productos)}>Eliminar</button></td>
</tr>
 ))}
</tbody>

    </table>  
  </section>

 {/*
  <section id="categoria_cafe" className="categorias-cafeteria">
     <h4>Productos de la categoria cafe</h4>
    <table >
      <thead>
          <tr>
          <th>Nombre del producto</th>
          <th>Categoria del prodcuto</th>
          <th>Precio del producto</th>
          <th>Total de unidades</th>
          <th>Agregar producto</th>
          <th>Imagen del prodcuto</th>
          <th>Descripcion del producto</th>
          <th>Eliminar producto</th>
          </tr>
        </thead>

        <tbody>
          <tr>
         <td>Cappuccion</td>
          <td>Expresso</td>
          <td>$13.000</td> 
          <td>30 unidades</td>
          <td> <img src="" alt="aqui va una iamgen"/> </td>
          <td>El capuchino es una bebida nacida en Austria, preparada con café expresso y leche montada con vapor para darle cremosidad.
          </td>
          <td > <input type="checkbox" name=""/> </td>
          <td> <button type="submit">Eliminar</button>
          </td>
             </tr>
         </tbody>
        </table>
  </section>



         <section id="categoria_bebidas" className="categorias-bebidas">
        <h4>Productos de la categoria bebidas</h4>
        <table class="categoriacafe">
          <thead>
          <tr>
          <th>Id</th>
          <th>Nombre del producto</th>
          <th>Categoria del prodcuto</th>
          <th>Precio del producto</th>
          <th>Total de unidades</th>
          <th>Descripcion del producto</th>
          <th>Imagen del prodcuto</th>
          <th>Agregar producto</th>
          <th>Editar producto</th>
          <th>Eliminar producto</th>
              </tr>
           </thead>
            <tbody>
            {productos.map((productos )=>(
          <tr key={productos.id_producto}>
          <td>{productos.id_producto}</td>
          <td> {productos.nombre} </td>
          <td> {productos.categoria} </td>
          <td> {productos.precio}</td> 
          <td> {productos.stock}</td>
          <td> {productos.descripcion} </td>
          <td> <img src="" alt="aqui va una iamgen"/> </td>
          <td > <input type="checkbox" id="btn_seleccionar" onClick={() => SELECCIONARPRODUCTO(productos.categoria)}/> </td>
          <td> <button type="submit" onClick={() => EDITARPRODUCTOS (productos)}>Editar</button> </td>
          <td> <button type="submit" onClick={() => ELIMINARPRODUCTOS (productos)}>Eliminar</button></td>
             </tr>
         ))}
         </tbody>
          </table>
     </section>



 
  <section  id="categoria_expressos" className="categorias-expressos">
      <h4>Productos de la categoria Expressos</h4>
    <table className="categoriasexpressos">
      <thead>
               <tr>
          <th>Id</th>
          <th>Nombre del producto</th>
          <th>Categoria del prodcuto</th>
          <th>Precio del producto</th>
          <th>Total de unidades</th>
          <th>Descripcion del producto</th>
          <th>Imagen del prodcuto</th>
          <th>Agregar producto</th>
          <th>Editar producto</th>
          <th>Eliminar producto</th>
              </tr>
      </thead>

      <tbody>
        {productos.map((productos )=>(
          <tr key={productos.id_producto}>
          <td>{productos.id_producto}</td>
          <td> {productos.nombre} </td>
          <td> {productos.categoria} </td>
          <td> {productos.precio}</td> 
          <td> {productos.stock}</td>
          <td> {productos.descripcion} </td>
          <td> <img src="" alt="aqui va una iamgen"/> </td>
          <td > <input type="checkbox" id="btn_seleccionar" onClick={() => SELECCIONARPRODUCTO(productos.id_producto)}/> </td>
          <td> <button type="submit" onClick={() => EDITARPRODUCTOS (productos)}>Editar</button> </td>
          <td> <button type="submit" onClick={() => ELIMINARPRODUCTOS (productos)}>Eliminar</button></td>
             </tr>
         ))}
      </tbody>
   </table>
  </section>



      <section id="categoria_extras" className="categorias-extras">
          <h4>Prodcto de la categoria Extras</h4>
          <table className="categoriaextras">
          <thead>
          <tr>
          <th>Id</th>
          <th>Nombre del producto</th>
          <th>Categoria del prodcuto</th>
          <th>Precio del producto</th>
          <th>Total de unidades</th>
          <th>Descripcion del producto</th>
          <th>Imagen del prodcuto</th>
          <th>Agregar producto</th>
          <th>Editar producto</th>
          <th>Eliminar producto</th>
              </tr>
        </thead>

        <tbody>
         {productos.map((productos )=>(
          <tr key={productos.id_producto}>
          <td>{productos.id_producto}</td>
          <td> {productos.nombre} </td>
          <td> {productos.categoria} </td>
          <td> {productos.precio}</td> 
          <td> {productos.stock}</td>
          <td> {productos.descripcion} </td>
          <td> <img src="" alt="aqui va una iamgen"/> </td>
          <td > <input type="checkbox" id="btn_seleccionar" onClick={() => SELECCIONARPRODUCTO(productos.id_producto)}/> </td>
          <td> <button type="submit" onClick={() => EDITARPRODUCTOS (productos)}>Editar</button> </td>
          <td> <button type="submit" onClick={() => ELIMINARPRODUCTOS (productos)}>Eliminar</button></td>
             </tr>
         ))}
         </tbody>
        </table>
        </section>
       

    <section id="categoria_pastelillos" className="categorias-pastelillos">
          <h4>Prodcto de la categoria pastelillos</h4>
          <table className="categoriapastelillos">
          <thead>
          <tr>
          <th>Id</th>
          <th>Nombre del producto</th>
          <th>Categoria del prodcuto</th>
          <th>Precio del producto</th>
          <th>Total de unidades</th>
          <th>Descripcion del producto</th>
          <th>Imagen del prodcuto</th>
          <th>Agregar producto</th>
          <th>Editar producto</th>
          <th>Eliminar producto</th>
              </tr>
        </thead>

        <tbody>
         {productos.map((productos )=>(
          <tr key={productos.id_producto}>
          <td>{productos.id_producto}</td>
          <td> {productos.nombre} </td>
          <td> {productos.categoria} </td>
          <td> {productos.precio}</td> 
          <td> {productos.stock}</td>
          <td> {productos.descripcion} </td>
          <td> <img src="" alt="aqui va una iamgen"/> </td>
          <td > <input type="checkbox" id="btn_seleccionar" onClick={() => SELECCIONARPRODUCTO(productos.id_producto)}/> </td>
          <td> <button type="submit" onClick={() => EDITARPRODUCTOS (productos)}>Editar</button> </td>
          <td> <button type="submit" onClick={() => ELIMINARPRODUCTOS (productos)}>Eliminar</button></td>
             </tr>
         ))}
         </tbody>
        </table>
        </section>
        */}
</div>

    </div>



</div> 


<Footer/>



</>

  );
}