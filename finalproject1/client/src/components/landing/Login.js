import React, {Component} from 'react';
import qs from 'qs';
import axios from 'axios';
import {url} from "../utils/RestUtils";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: "",
            password: "",
            error: ""
        };
    }

     handleSubmit (){
         console.log("inside handle submit for login")
            axios.get(url + "login", {
                params: {
                    email: this.state.emailId,
                    password: this.state.password
                }
            }).then(
            function(response) {
                console.log("got response from login query!");
                this.studentValidate(response);
            }.bind(this),
            function(error) {
                console.log(error)
            }
        );
    }

    studentValidate(response) {
        console.log("inside student vlaidation")
        if(response.data.size>=1 && response.data[0].email === this.state.emailId && response.data[0].password === this.state.password){
            console.log("Login successful!");

        } else {
            console.log("validation not successful");
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="container">
                <div className="row justify-content-center align-items-center css-form-cont">
                  <div className="col-md-6">
                    <h4 className="text-center">Login</h4>
                    <br/>
                    <div className="form-group">
                      <label htmlFor="email">Email</label><span data-name="email"/>
                      <input type="email" className="form-control" name="emailId" id="email" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label><span/>
                      <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>

        )
    }
}
