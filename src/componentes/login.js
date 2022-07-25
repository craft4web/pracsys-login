import React from "react";
import "../hojas-de-estilos/login.css"

function Login(){
return(
<div className="contenedor-login">
    <div className="contenedor-login-top">Inicio de sesion</div>
    <div className="user">
        <div className="username">
          Usuario: <input type="text" id="usuario" size="30" placeholder="user@ejemplo.com"/>
        </div>
        <div className="password">
          Contraseña: <input type="password" id="pass" size="30"/>
        </div> 
        <div className="recover">
          Recuerdame <input type="checkbox"/>
        </div>    
    </div>
    <button type="submit" className="boton-sesion">Iniciar Sesion</button>

</div>
);
}

export default Login;