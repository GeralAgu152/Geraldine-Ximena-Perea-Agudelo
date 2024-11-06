{/*import './App.css';
import Layout from './layout/layout';

function App() {
  return (
    <Layout>
      <h1>Aqui van los componentes</h1>
    </Layout>
  );
}

export default App;
*/}


import React, { useEffect, useState } from "react"
import Header from "./components/header/header"


const App = () => {


  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] =useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme' , theme)
  }, [theme])

  return(
    <div className={`container ${theme}`}>
      <Header theme={theme} setTheme={setTheme}/>
    </div>
  
  )
}

export default App;
