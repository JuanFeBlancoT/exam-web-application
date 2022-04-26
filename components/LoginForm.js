import React from 'react';
import ReactDOM from 'react-dom';

class LoginForm extends React.Component{

  state = {
    username: '',
    password: ''
  };

  handleChange = event =>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = event =>{
    event.preventDefault();
    console.log(this.state);
    
  }

  render(){
    return(
      <div>
      <h1>Login</h1>
      <form id="login-form-id" onSubmit={this.handleSubmit}>
        <label >Username</label>
        <input type="text" name="username" placeholder="Nombre de usuario" id="loginusernameID" onChange={this.handleChange}></input>
        <br></br>
        <label >Password</label>
        <input type="password" name="password" placeholder="Contraseña" id="loginPasswordID" onChange={this.handleChange}></input>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
    )
  }
}

export default LoginForm;