import React, { Component } from "react";
import { Container,Row,Col,Input} from "reactstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import Validation from "./Validation"; 
import { connect } from 'react-redux';
import {loginActions}  from "./actions";
import jwt from "jsonwebtoken";


class Login extends Component {
  constructor(props) {
    super(props);
    if(props.loginDetails.token){
      this.props.history.push(`/post`);
    }
    this.state = {
      login_status: false,
      email: {
        value: "",
        valid: false,
      },
      password: "",
      error: "",
      loading: false,
      loginto: "",
      forgotPassword: false,
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

  login(e) {
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
        if(this.state.email.value === this.props.loginDetails.username && this.state.password === this.props.loginDetails.password){
          let token = jwt.sign(
            {
                email: this.state.email,
                iat: +new Date() / 1000,
                exp: +new Date() / 1000 + 604800,
            },
            "yogendra@7750"
        );
          this.props.login({token:token});
        }else{
          this.setState({error:'Incorrect email/password'})
           return null;
        }
      }
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      document.querySelector(".login_btn").click();
    }
  }

  render() {
    if (this.props.loginDetails.token) {
      return (
        <Redirect
          to={{
            pathname: '/post',
          }}
        />
      );
    } else {
      return (
        <div>
          
          <Container className="login-body">
            <Row>
              <Col className="loginpanel">              
                <Row className="panel_top">LOGIN</Row>  
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
                <button className="login_btn" onClick={(e) => {this.login(e)}}>LOGIN</button> 
                  <div className="forgot_btn"                      
                  >
                    Forgot Password
                  </div>
                  <div className="signupdiv mt-3">
                    <span>Don't have an account? </span>
                    <span><Link to="/signup" className="signuplink"
                    >
                      Signup
                    </Link></span>
                  </div>
                
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

function mapState(state) {
  const { login:loginDetails } = state;
  return { loginDetails };
}

const actionCreators = {
  login: loginActions.login
};

Login = connect(mapState, actionCreators)(Login);
export default Login;
