import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';

import React from 'react'

const login = () => {
    return (
        <div id="login">
            <form>
                <div className="login-group">
                    <label for="user">Usuario:</label>
                    <input type="email" id="user" name="user" value="usuario@correo.com"/><br/>
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" value="password"/><br/>
                    <input type="submit" value="Submit"/>
                </div>
            </form> 
            <Button href="/index" id="btn-back" class="btn btn-dark" variant="dark">Volver</Button>
        </div>
    )
}

export default login;
