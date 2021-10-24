// {BrowserRouter as Router} from "react-router-dom";
import './login.css'
import logo from './salestic.gif';
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import GoogleLogin from 'react-google-login';
import React from "react";
import api from '../../api';

const login = () => {
  const loginError = (err) =>{
    console.log(err)
  };

  const Success = (res) => {
    localStorage.setItem("token", res.tokenId);
    api.user.getUser().then(res =>
      {
        if(res==="Activo"){
          window.location.href='/home';
        }else if(res==="Inactivo"){
          window.location.href="/"
          localStorage.removeItem("token");
        }
      }
    );
  }
    return(
      <Form method="POST" className="formLogin">
        <div className="title">
          <h1>Sistema de ventas</h1> 
        </div>
          
        <div className="text-center">  
        <Image src={logo} height="300px" width="300px" roundedCircle/> 
        </div>

        <GoogleLogin
          clientId="722454153046-8rh9pimhsv2s86t77fgaqnj4uoujc5kv.apps.googleusercontent.com"
          render={renderProps => (
            <div className="buttonDiv">
            <button className="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>
            </div>
          )}
          buttonText="Login"
          onSuccess={Success}
          onFailure={loginError}
          cookiePolicy={'single_host_origin'}
        />
    </Form>
    );
}

export default login;