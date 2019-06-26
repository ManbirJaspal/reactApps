import React, { Component } from "react";
import { signUp } from "../utils/RestUtils";
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import qs from "qs";
import axios from 'axios';
import { url } from "../utils/RestUtils";


export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      fname: "",
      lname: "",
      password: ""
    };
  }

  handleSubmit() {

    const reg_Data = qs.stringify({
      email: this.state.emailId,
      password:this.state.password,
      fname: this.state.fname,
      lname: this.state.lname
    });

        axios.post(url + "student", reg_Data)
         .then(response => {
          console.log('SUCCESSFULLy REGISTERED AT CLIENT')
          console.log(response.data);
          })
          console.log(this.state);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
         Sign-Up
      </Header>
      <Form size='large' onSubmit={this.handleSubmit.bind(this)}>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='First name' name="fname" id="fname" onChange={this.handleChange.bind(this)}/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Last name' name="lname" id="lname" onChange={this.handleChange.bind(this)} />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' name="emailId" id="email" type='email' onChange={this.handleChange.bind(this)} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name="password" id="password"
            onChange={this.handleChange.bind(this)}
          />

          <Button color='teal' fluid size='large' type="submit">
            Register
          </Button>
        </Segment>
      </Form>
      <Message>
        Back to Login? <Link to='/login'>Login</Link>
      </Message>
    </Grid.Column>
    </Grid>
    );
  }
}
