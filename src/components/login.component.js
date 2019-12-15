import React, { Component } from 'react';
import auth from "../auth";
import { Container } from 'react-bootstrap';


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

   }

  dismissError=()=>{
    this.setState({ error: '' });
  }

  handleSubmit=(evt)=> {
    evt.preventDefault();


    if (!this.state.username) {
      return this.setState({ error: 'Enter Username' });
    }
    

    if (!this.state.password) {
      return this.setState({ error: 'Enter Password' });
    }

    return this.setState({ error: '' });
  }

  handleUserChange=(evt)=> {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange=(evt)=> {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
  

    return (
      <Container>
      <div className="Login" style={{height:"300px", paddingTop:"50px", textAlign:"center" }}>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" 
          
          onClick={() => {
            if(this.state.username==="admin" && this.state.password==="123"){
              auth.login(() => {
                    this.props.history.push("/admin")} )} }}
           
        />
         
        </form>
      </div>
      </Container>
    );
  }
}

export default LoginPage;