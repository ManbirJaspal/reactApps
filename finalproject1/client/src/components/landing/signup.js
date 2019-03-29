import React, { Component } from "react";
import { signUp } from "../utils/RestUtils";

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      fname: "",
      lname: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      studentType: "",
      majorDept: "",
      gradAssistant: ""
    };
  }

  handleSubmit() {
    signUp(
      this.state.emailId,
      this.state.password,
      this.state.fname,
      this.state.lname,
      this.state.address1,
      this.state.address2,
      this.state.city,
      this.state.state,
      this.state.zip,
      this.state.studentType,
      this.state.majorDept,
      this.state.gradAssistant
    );
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (

      <div className="ui one column stackable center aligned page grid">
        <div className="column twelve wide">
          <form className="ui form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="field">
              <label htmlFor="fname">First Name</label>
              <span />
              <input
                type="text"
                className="form-control"
                name="fname"
                id="fname"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="lname">Last Name</label>
              <span />
              <input
                type="text"
                className="form-control"
                name="lname"
                id="lname"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <span data-name="email" />
              <input
                type="email"
                className="form-control"
                name="emailId"
                id="email"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <span />
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="address1">Address 1</label>
              <span />
              <input
                type="text"
                className="form-control"
                name="address1"
                id="address1"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="address2">Address 2</label>
              <span />
              <input
                type="text"
                className="form-control"
                name="address2"
                id="address2"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="City">City</label>
              <span />
              <input
                type="text"
                className="form-control"
                name="city"
                id="city"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="state">State</label>
              <span />
              <input
                type="text"
                className="form-control"
                name="state"
                id="state"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="zip">Zip</label>
              <span />
              <input
                type="number"
                className="form-control"
                name="zip"
                id="zip"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="field">
              <label htmlFor="stype">Student Type</label>
              <span />
              <br />
              <select id="stype" onChange={this.handleChange.bind(this)}>
                <option value="select">Select</option>
                <option value="MS">MS</option>
                <option value="PhD">Phd</option>
                <option value="UGRAD">UGRAD</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <span />
              <br />
              <select id="department" onChange={this.handleChange.bind(this)}>
                <option value="select">Select</option>
                <option value="CSC">CSC</option>
                <option value="MATH">MATH</option>
                <option value="POLS">POLS</option>
                <option value="HIST">HIST</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gradA">Graduate Assistantship</label>
              <span />
              <br />
              <select id="gradA" onChange={this.handleChange.bind(this)}>
                <option value="select">Select</option>
                <option value="Y">Y</option>
                <option value="N">N</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
