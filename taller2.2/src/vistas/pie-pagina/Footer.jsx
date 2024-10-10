

import './estilos/estilos-footer.css'


export function Footer(){

    return(

 <>

 <section className="pie">
  <section className="header">
    <article className="logo">
      <img src="logo.jpg" alt=""/>
      <p className="parrafo">Prueba del pie de pagina de la aplicacion</p>
    </article>
    <article className="redes">
      <span className="fk"><i className="fa-brands fa-facebook"></i></span>
      <span className="wp"><i className="fa-brands fa-whatsapp"></i></span>
      <span className="im"><i className="fa-brands fa-instagram"></i></span>
      <span className="tr"><i className="fa-brands fa-x-twitter"></i></span>
    </article>
  </section>
     <hr/>
  <section className="seccion">
    <article>
      <h2>Autores</h2>
      <a href="#">Jeiner</a>
      <a href="#">Geraldine</a>
      <a href="#">Nelson</a>
    </article>
    <article>
      <h2>Servicios</h2>
      <a href="#">jeienr</a>
      <a href="#">Geraldine</a>
      <a href="#">Nelson</a>
    </article>
    <article>
      <h2>Direccion</h2>
      <a href="#">Jeiner</a>
      <a href="#">Geraldine</a>
      <a href="#">Nelson</a>
    </article>  
    <article>
      <h2>Empleados</h2>
      <a href="#">Jeiner</a>
      <a href="#">Geraldine</a>
      <a href="#">Nelson</a>
    </article>
  </section>
</section>



 </>
 )
}