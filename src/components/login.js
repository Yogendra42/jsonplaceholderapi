import React, { Component } from "react";
import { Container,Row,Col,Input} from "reactstrap";
import { Link } from "react-router-dom";
// import email from "../icons/email.svg";
// import email_error from "../icons/email_error.svg";
// import password from "../icons/password.svg";
// import "../css/createaccount.css";
// import axios from "axios";
import { Redirect } from "react-router";
// import Loader from "react-loader-spinner";
// import queryString from "query-string";
// import TextField from "@material-ui/core/TextField";
// import Validation from "./Validation"; 
// import baseUrl from "./Global.js";
// import MediaQuery from "react-responsive";
// import logo from "../icons/favicon.ico";
import Cookies from "js-cookie";


class Login extends Component {
  constructor(props) {
    super(props);
    if (Cookies.get("token.id")) {
    //   this.props.defaultProps.history.push("/mf/investments");
    }

    this.state = {
      login_status: false,
      email: {
        value: "",
        valid: true,
      },
      password: "",
      error: "",
      loading: false,
      loginto: "",
      forgotPassword: false,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount(props) {
    // if (this.state.email.value) {
    //   var email = Validation.validate("email", this.state.email.value);
    //   if (email !== null) {
    //     return this.setState({
    //       email: {
    //         value: this.state.email.value,
    //         valid: true,
    //       },
    //     });
    //   } else {
    //     return this.setState({
    //       email: {
    //         value: this.state.email.value,
    //         valid: false,
    //       },
    //     });
    //   }
    // }
  }

  handleChange(e) {
    // switch (e.target.placeholder) {
    //   case "Email":
    //     var email = Validation.validate("email", e.target.value);
    //     if (email !== null) {
    //       return this.setState({
    //         email: {
    //           value: e.target.value,
    //           valid: true,
    //         },
    //         error: "",
    //         success: "",
    //       });
    //     } else {
    //       return this.setState({
    //         email: {
    //           value: e.target.value,
    //           valid: false,
    //         },
    //       });
    //     }
    //   case "Password":
    //     return this.setState({
    //       password: e.target.value,
    //       error: "",
    //       success: "",
    //     });
    //   default:
    //     return null;
    // }
  }

  login(e) {
    // if (e.target.getAttribute("source") === "login") {
    //   const credentials = {
    //     email: this.state.email,
    //     password: this.state.password,
    //   };
    //   if (this.state.email.value !== "" && this.state.password !== "") {
    //     var ref = this;
    //     if (this.state.email.valid === true) {
    //       this.setState({ loading: true }, () => {
    //         axios
    //           .post(baseUrl + "mutualfunds/auth/login", {
    //             email: credentials.email.value,
    //             password: credentials.password,
    //           })
    //           .then(function (response) {
    //             // console.log(response)

    //             if (response.data.status === true) {
    //               Cookies.set("token.id", response.data.token, {
    //                 expires: 7,
    //                 path: "/",
    //               });

    //               // ref.props.cookies.set('token.id', response.data.token, { path: '/' },{ expires: 7 });
    //               ref.fetchMembers();
    //               axios
    //                 .post(baseUrl + "mutualfunds/KYC/check", "", {
    //                   headers: {
    //                     "auth-token": response.data.token,
    //                   },
    //                 })
    //                 .then(function (response) {
    //                   if (response.data.status === true) {
    //                     if (
    //                       response.data.kyc[0].docs_verification ===
    //                         "pending" ||
    //                       response.data.kyc[0].docs_verification === null
    //                     ) {
    //                       ref.setState({
    //                         login_status: true,
    //                         loginto: "/mf/kyc",
    //                       });
    //                     } else {
    //                       ref.setState({
    //                         login_status: true,
    //                         loginto: "/mf/investments",
    //                       });
    //                     }
    //                   }
    //                 })
    //                 .catch(function (error) {
    //                   console.log(error);
    //                 });
    //             } else {
    //               ref.setState({
    //                 loading: false,
    //                 error: response.data.error_desc,
    //               });
    //             }
    //           })
    //           .catch(function (error) {
    //             console.log(error);
    //           });
    //       });
    //     } else {
    //       this.setState({
    //         error: "Incorrect email address",
    //       });
    //     }
    //   } else {
    //     this.setState({
    //       error: "Fields can't be left blank",
    //     });
    //   }
    // }
  }



  forgotPassword() {
    // this.setState({
    //   forgotPassword: !this.state.forgotPassword,
    //   error: "",
    // });
  }

  resetPassword(e) {
    // const credentials = {
    //   email: this.state.email,
    // };
    // if (this.state.email.value) {
    //   if (this.state.email.valid === true) {
    //     this.setState({
    //       loading: true,
    //     });
    //     var ref = this;
    //     axios
    //       .post(baseUrl + "mutualfunds/direct/Resetpassword", {
    //         email: credentials.email.value,
    //       })
    //       .then(function (response) {
    //         if (response.data.status === true) {
    //           ref.setState({
    //             success: response.data.message,
    //             loading: false,
    //           });
    //         } else {
    //           ref.setState({
    //             loading: false,
    //             error: response.data.error_desc,
    //           });
    //         }
    //       })
    //       .catch(function (error) {});
    //   } else {
    //     this.setState({
    //       error: "Incorrect email address",
    //       loading: false,
    //     });
    //   }
    // } else {
    //   this.setState({
    //     error: "Fields can't be left blank",
    //     loading: false,
    //   });
    // }
  }

  handleKeyPress(event) {
    // if (event.key === "Enter") {
    //   document.querySelector(".loginbtn").click();
    // }
  }

  render() {
    if (this.state.login_status === true) {
      return (
        <Redirect
          to={{
            pathname: this.state.loginto,
          }}
        />
      );
    } else {
      return (
        <div>
          
          <Container className="panelBackCover mobile_panelcover pr0px">
            <Row
              className="transition"
              style={{ right: `+2000px`, transition: `right 1s` }}
            >
              <Col xs={{ size: 12 }}
                      sm={{ size: 12 }}
                      md={{ size: 6 }}
                      lg={{ size: 6 }} className="loginpanel">
                {/* {this.state.loading === true ? (
                  <div className="loaderTriangle">
                    <Loader
                      className="loader"
                      type="Triangle"
                      color="#00BFFF"
                      height="150"
                      width="150"
                    />
                  </div>
                ) : null} */}
                {this.state.forgotPassword === false ? (
                  <>
                    <div className="panel_top">Login</div>
                    <form className="form form_login">
                      <div className="input_div">
                        <Input
                          className="email_txt"
                          placeholder="Email"
                          value={this.state.email.value}
                          onChange={(e) => this.handleChange(e)}
                        ></Input>
                         {/* <TextField
                            className="email_txt wd100perc"
                            field="userName"
                            placeholder="Email"
                            label="Email"
                            onKeyPress={this.handleKeyPress}
                            value={this.state.email.value}
                            onChange={(e) => this.handleChange(e)}
                          /> */}
                      </div>
                      <div className="input_div mt20px">
                        <Input
                          type="password"
                          className="password_txt"
                          placeholder="Password"
                          value={this.state.password}
                          onKeyPress={this.handleKeyPress}
                          onChange={(e) => this.handleChange(e)}
                        ></Input>
                        {/* <TextField
                            className="password_txt wd100perc "
                            field="Password"
                            placeholder="Password"
                            type="password"
                            label="Password"
                            onKeyPress={this.handleKeyPress}
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e)}
                          /> */}
                      </div>
                      <div className="error">{this.state.error}</div>
                      <div
                        source="login"
                        className="create_btn loginbtn mt20px"
                        onClick={(event) => {
                          this.login(event);
                        }}
                      >
                        Login
                      </div>
                      <Link to="/mf/loginotp">
                        <div
                        className="forgot_btn"                      
                        >
                        Login Via Otp
                        </div>
                      </Link>
                      <div
                        className="forgot_btn"
                        onClick={(event) => {
                          this.forgotPassword(event);
                        }}
                      >
                        Forgot Password
                      </div>
                      <div className="signupdiv mt20px">
                        <h5>Don't have an account?</h5>
                        <Link to="/mf/create-account"
                          href="create-account"
                          color=""
                          className="signuplink"
                        >
                          Signup
                        </Link>{" "}
                      </div>
                    </form>
                  </>
                ) : (
                  <>
                    <div className="panel_top">Forgot Password</div>
                    <form className="form form_login">
                      <div className="input_div">
                        <Input
                          className="email_txt"
                          placeholder="Email"
                          value={this.state.email.value}
                          onChange={(e) => this.handleChange(e)}
                        ></Input>
                           {/* <TextField
                            className="email_txt wd100perc "
                            placeholder="Email"
                            label="Email"
                            value={this.state.email.value}
                            onChange={(e) => this.handleChange(e)}
                          /> */}
                      </div>
                      <div className="error">{this.state.error}</div>
                      <div style={{ color: `green`, "font-size": "0.9em" }}>
                        {this.state.success}
                      </div>
                      <div
                        source="login"
                        className="create_btn mt20px"
                        onClick={(event) => {
                          this.resetPassword(event);
                        }}
                      >
                        Reset Password
                      </div>
                      <div
                        className="forgot_btn"
                        onClick={(event) => {
                          this.forgotPassword(event);
                        }}
                      >
                        Login
                      </div>
                    </form>
                  </>
                )}
              </Col>
         
            </Row>
          </Container>
        </div>
      );
    }
  }
}

export default Login;
