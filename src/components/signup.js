import React, { Component } from "react";
import { Container,Row,Col,Input} from "reactstrap";
import { Link } from "react-router-dom";
import Validation from "./Validation"; 
import { connect } from 'react-redux';
import {loginActions}  from "./actions";
import jwt from "jsonwebtoken";


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: "",
        valid: false,
      },
      password: "",
      error: "",
      success: "",
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    switch (e.target.placeholder) {
      case "Email":
        var email = Validation.validate("email", e.target.value);
        if (email !== null) {
          return this.setState({
            email: {
              value: e.target.value,
              valid: true,
            },
            error: "",
            success: "",
          });
        } else {
          return this.setState({
            email: {
              value: e.target.value,
              valid: false,
            },
          });
        }
      case "Password":
        return this.setState({
          password: e.target.value,
          error: "",
          success: "",
        });
      default:
        return null;
    }
  }

  signup(e) {
      if(!this.state.email.value){
        this.setState({
          error: "Email Field can't be left blank",
        });
        return null;
      }
      if(!this.state.password){
        this.setState({
          error: "Password Field can't be left blank",
        });
        return null;
      }

      if(!this.state.email.valid){
        this.setState({
          error: "Invalid Email Field",
        });
        return null;
      }
      if (this.state.email.value && this.state.email.valid && this.state.password) {
          let token = jwt.sign(
            {
                email: this.state.email,
                iat: +new Date() / 1000,
                exp: +new Date() / 1000 + 604800,
            },
            "yogendra@7750"
        );
          this.props.signup({username:this.state.email.value,password:this.state.password,token:token});
          this.setState({success:'User Created Successfully. Please Login'});
      }
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      document.querySelector(".login_btn").click();
    }
  }

  render() {
    return (
    <div>
        <Container className="login-body">
        <Row>
            <Col className="loginpanel">              
            <Row className="panel_top">SIGNUP</Row>  
            <Input
                className="email_txt"
                placeholder="Email"
                value={this.state.email.value}
                onChange={(e) => this.handleChange(e)}
            />
            <Input
                type="password"
                className="password_txt"
                placeholder="Password"
                value={this.state.password}
                onKeyPress={(e) => this.handleKeyPress(e)}
                onChange={(e) => this.handleChange(e)}
            />
            <div className="login_error">{this.state.error}</div>
            <div className="login_error">{this.state.success}</div>
            <button className="login_btn" onClick={(e) => {this.signup(e)}}>SIGNUP</button> 
                <div className="signupdiv mt-3">
                <span><Link to="/" className="signuplink"
                >
                    Login
                </Link></span>
                </div>
            
            </Col>
        </Row>
        </Container>
    </div>
    );
  }
}

function mapState(state) {
  const { login:loginDetails } = state;
  return { loginDetails };
}

const actionCreators = {
  signup: loginActions.signup
};

SignUp = connect(mapState, actionCreators)(SignUp);
export default SignUp;
