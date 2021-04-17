import React from 'react';
import Formulario from './Formulario.jsx'


function LoginContainer(props) {
    return (
        <div className="container login-container shadow-custom">
            <h3 className="h3 m-2 text-center"> Formulario </h3>
            <hr className="m-1"></hr>
            <Formulario></Formulario>
        </div>
    );
}

export default LoginContainer;