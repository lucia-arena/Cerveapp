import React,{Component} from "react";
import './Header.css';
/* import logo from '/images/birrapp.png'; */
/* import settings from '/images/setting.png';
import hamburguer from '/images/hamburguer.png';
import Home from '../home/Home'; */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


export default class Header extends Component{
  render(){
      return(
        <header>
            <div className="header">
              <div className="hamburguerContainer">
                <div className="container">
                  <div className="btn-group mt-3">
                    {/* mt-3 margin-top de 3 */}
                    <Link to="/" className="btn btn-hamburguer mr-2"></Link>
                  </div>
                </div>
              </div>    
              <img src="img/birrapp.png" alt="logo" className="birra-logo"/>
              <div className="settingsContainer">
                <div className="container">
                  <div className="btn-group mt-3">
                    {/* mt-3 margin-top de 3 */}
                    <Link to="/settings" className="btn btn-settings mr-2"></Link>
                  </div>
                </div>
              </div>
            </div>
        </header>
      );
  }  
};
