
import './estilos/estilos-factura.css'
import {Header} from '../header/Header'
import {Footer} from '../pie-pagina/Footer'


export function Factura (){



    return(

   <>

<Header/>


<div className="imagen-fondo">
<div className="ocultar">
<form> 
<label>Nombre</label>
<input/>
<label>Mesa</label>
<input/>

<input type="submit" />
</form>
</div>

  <div className="factu">
   <h2>Facturas</h2>
 
  {/*Detalles de la tienda */}
  <article class="arriba">
    <p><b>Direccion de la cafeteria:</b></p>
    <p><b>Contacto de la cafeteria:</b></p>
    </article>
  
    
    {/*Detalles de los productos del pedido*/}
  <article class="tabla">
   <table>

 {/*Encabezado de la tabla*/}
    <thead>
        <tr>
          <th><b>No.</b></th>
          <th><b>Nombre del producto</b></th>
          <th><b>Precio</b></th>
          <th><b>Cantidad</b></th>
          <th><b>Total</b></th>
        </tr>
    </thead>
 {/*Cuerpo de la tabla*/}
    <tbody>
            <tr>
             <td><b>1</b></td>
             <td><b>Mezcla de cafe</b> </td>
             <td><b>$6.500</b></td>
             <td><b>2</b></td>
             <td><b>$13.000</b></td>
            </tr>
            
            <tr>
             <td><b>2</b></td>
             <td><b>Pastel de frutas</b></td>
             <td><b>$3.000</b></td>
             <td><b>1</b></td>
             <td><b>3.000</b></td>
            </tr>
            
            <tr>
             <td><b>3</b></td>
             <td><b>Expresso</b></td>
             <td><b>$11.000</b></td>
             <td><b>1</b></td>
             <td><b>$11.000</b></td>
            </tr>

            <tr>
             <td><b>4</b></td>
             <td><b>Cappuccino</b></td>
             <td><b>$8.500</b></td>
             <td><b>3</b></td>
             <td><b>$25.500</b></td>
            </tr>
    </tbody>
   </table>
   <h4>Total: $52.500</h4>
   <button>Realizar pago</button>
  </article>

    {/*Detalles de la factura */}
  <article class="abajo">
    <p> <b>Nombre: Nelson gamboa fajardo</b></p>
    <p> <b>Numero de mesa: 4</b></p>
    <p> <b>Fecha del pedido: 14/11/2023</b></p>
  </article>


  </div>  
</div>

  <Footer/>

  </>

    )
}