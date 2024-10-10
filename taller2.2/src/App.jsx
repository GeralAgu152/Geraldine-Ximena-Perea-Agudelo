

import {Registro_usuarios} from './vistas/formularios/Registro_usuarios'
import {useState} from 'react'
import {Mesas} from './vistas/tablas/Mesas'


function App () {

const [user, setUser] = useState([]);



  return(
<>
{
  !user.length > 0
  ? <Registro_usuarios  setUser={setUser} />
  : <Mesas user={user} setUser={setUser}/>
}


  
</>

  );
}

export default App