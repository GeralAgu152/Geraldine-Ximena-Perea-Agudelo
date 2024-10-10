
import './estilos/estilos-header.css'


export function Header(){


  


 return(

<>

 <nav className="nav-principal">
    <ul className="menu-horizontal">
    <button>cerrar</button>
       <li><a href="Mesas">Mesas</a></li>
       <li>
        <a href="Menu">Menu</a>
         <ul className="menu-vertical">
          <li><a href="Cafe">Cafe</a></li>
          <li><a href="Bebidas">Bebidas</a></li>
          <li><a href="Expressos">Expressos</a></li>
          <li><a href="Extras">Extras</a></li>
          <li><a href="Pastelillos">Pastelillos</a></li>
         </ul>
       </li>
       <li><a href="Registrar_productos">Registrar productos</a></li>
       <li><a href="Pedido">Pedidos</a></li>
       <li><a href="Factura">Factura</a></li>
       <li><a href="ListarUsuarios">Listar usuarios</a></li>
    </ul>
 <section class="contenedor-buscar">
      <form>
        <input type="text" placeholder="Buscar..."/>
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
  </section>
</nav>


</>

)
}
