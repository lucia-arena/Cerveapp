import React from 'react'
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {Button} from 'react-bootstrap';
import {navLink} from "react-router-dom"

const Home = () => {
    return (
        <div className="homeContainer">
            <img src='/img/logo.png' className="App-logo" alt="logo" />
            <Button href="/index" className="btn btn-home" variant="dark">Entrar</Button>
        </div>

    
    )
}

export default Home;
