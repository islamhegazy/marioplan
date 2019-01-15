import React, { Component } from 'react'

export class Sigin extends Component {
    state={
        email: '',
        password:''
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
            <h5 className="grey-text text-darken-3">Sigin In</h5>
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

export default Sigin
