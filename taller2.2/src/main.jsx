import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import {Menu} from './vistas/Productos/Menu'
import { Prueba } from './vistas/admin/Prueba'
import {Producto} from './vistas/Productos/Producto'
import {Mesas} from './vistas/tablas/Mesas'
import {Registrar_productos} from './vistas/formularios/Registrar_productos'
import {Pedido} from './vistas/tablas/Pedido'
import {Factura} from './vistas/tablas/Factura'
import{Pastelillos} from './vistas/categorias/Pastelillos'
import{Cafe} from './vistas/categorias/Cafe'
import{Bebidas} from './vistas/categorias/Bebidas'
import{Expressos} from './vistas/categorias/Expressos'
import{Extras} from './vistas/categorias/Extras'
import{Registro_usuarios} from './vistas/formularios/Registro_usuarios'
import{ListarUsuarios} from './vistas/admin/ListarUsuarios'
let getid_rol = localStorage.getItem("id_rol")

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
<BrowserRouter>
<Routes> 
   <Route path='/'element={<App />} />

   <Route path='Mesas'element={(getid_rol == "administrador" || getid_rol == "mesero"  )?<Mesas/>: "<h1>error</h1>" }/>

   <Route path='Menu' element={(getid_rol == "administrador" )?<Menu/>: "<h1>error</h1>"}/>
   <Route path='Pastelillos' element={(getid_rol == "administrador" )?<Pastelillos/>: "<h1>error</h1>"}/>
   <Route path='Producto' element={<Producto/>}/>
   <Route path='Cafe' element={<Cafe/>}/>
   <Route path='Bebidas' element={(getid_rol == "administrador" )?<Bebidas/>: "<h1>error</h1>"}/>
   <Route path='Expressos' element={(getid_rol == "administrador" )?<Expressos/>: "<h1>error</h1>"}/>
   <Route path='Extras' element={<Extras/>}/>
   <Route path='Registrar_productos' element={(getid_rol == "administrador" )?<Registrar_productos /> : "<h1>error</h1>"}/>
   <Route path='Registro_usuarios' element={<Registro_usuarios/>}/>
   <Route path='Pedido' element={(getid_rol == "administrador" )?<Pedido/>: "<h1>error</h1>"}/>
   <Route path='Factura' element={(getid_rol == "administrador" )?<Factura/>: "<h1>error</h1>"}/>
   <Route path='Prueba' element={<Prueba/>}/>
   <Route path='ListarUsuarios' element={(getid_rol == "administrador" )?<ListarUsuarios/>: "<h1>error</h1>"}/>

</Routes>
</BrowserRouter>
</React.StrictMode>,
)
