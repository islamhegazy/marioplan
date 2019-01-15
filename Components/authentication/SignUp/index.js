import React, { Component } from 'react'

export class SignUp extends Component {
    state={
        email: '',
        password:'',
        firstName:'',
        lastName: ''
    }
    handelChange = e =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handelSubmit = e =>{
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handelSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text"  id="firstName" onChange={this.handelChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text"  id="lastName" onChange={this.handelChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="email">E-mail</label>
                <input type="email"  id="email" onChange={this.handelChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handelChange}/>
            </div>
            <div className="input-field center">
                <button className="btn pink lighten-1 z-depth-1">Login</button>
            </div>
        </form>
      </div>
    )
  }
}

export default SignUp
