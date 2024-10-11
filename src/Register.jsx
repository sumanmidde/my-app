import React, { Component } from "react";
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fullName: "",
            dateOfBirth: "",
            controls: [
                "email",
                "password",
                "fullName",
                "dateOfBirth"

            ],
            errors: {
                email: [],
                password: [],
                fullName: [],
                dateOfBirth: []
            }

        };
    };
    render() {
        return (


            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h1>Registration</h1>
                    {/* email field */}
                    <div className="form-group form-row">
                        <label className="col-lg-4 col-form-label" htmlFor="email">Email</label>
                        <div className="col-lg-8">
                            <input type="text" id="email" className="form-control" value={this.state.email}
                                onChange={(e) => { this.setState({ email: e.target.value }, this.validate); }} />
                        </div>
                    </div>
                    {/* email end */}
                    {/* password field */}
                    <div className="form-group form-row">
                        <label className="col-lg-4 col-form-label" htmlFor="password">Password</label>
                        <div className="col-lg-8">
                            <input type="password" id="password" className="form-control" value={this.state.password}
                                onChange={(e) => { this.setState({ password: e.target.value }, this.validate); }} />
                        </div>
                    </div>
                    {/* password end */}
                    {/* fullname field */}
                    <div className="form-group form-row">
                        <label className="col-lg-4 col-form-label" htmlFor="fullname">Full name</label>
                        <div className="col-lg-8">
                            <input type="text" id="fullname" className="form-control" value={this.state.fullName}
                                onChange={(e) => { this.setState({ fullName: e.target.value }, this.validate); }} />
                        </div>
                    </div>
                    {/* fullname end */}
                    {/* DoB field */}
                    <div className="form-group form-row">
                        <label className="col-lg-4 col-form-label" htmlFor="dob">Date of Birth</label>
                        <div className="col-lg-8">
                            <input type="date" id="dob" className="form-control" value={this.state.dateOfBirth}
                                onChange={(e) => { this.setState({ dateOfBirth: e.target.value }, this.validate); }} />
                        </div>
                    </div>
                    {/* DoB end */}

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-right m-7">
                                <button className="btn btn-success " onClick={this.onRegister}>Register</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        );
    }
    onRegister() {

    }
    validate = () => {
        //console.log("validate");
        const validEmailRegx = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/;
        const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
        let errors = {};
        // this is for read the all controls in the state using forEach
        this.state.controls.forEach((control) => {
            //console.log(control);
            switch (control) {
                case "email":
                    //email can't be blank
                    if (!this.state[control]) {
                        //console.log(!this.state[control], "dgagvc");
                        //console.log(control);
                        errors[control].push("Email can't be blank");
                    }
                    // this check the email regx
                    if (this.state.email) {
                        if (!validEmailRegx.test(this.state[control])) {
                            errors[control].push("Proper email address is expected");
                        }
                    }
                    break;
                case "password":
                    //email can't be blank
                    if (!this.state[control]) {
                        //console.log(!this.state[control], "dgagvc");
                        //console.log(control);
                        errors[control].push("password can't be blank");
                    }
                    // this check the email regx
                    if (this.state.password) {
                        if (!validPasswordRegex.test(this.state[control])) {
                            errors[control].push(
                                "Password should be 6 to 15 characters long with at least one uppercase letter, one lowercase letter and one digit"
                            );
                        }
                    }
                    break;
                case "fullName":
                    //email can't be blank
                    if (!this.state[control]) {
                        //console.log(!this.state[control], "dgagvc");
                        //console.log(control);
                        errors[control].push("fullname can't be blank");
                    }
                    break;
                case "dateOfBirth":
                    //dateOfBirth can't be blank
                    if (!this.state[control]) {
                        errors[control].push("Date of Birth can't be blank");
                    }

                    //dateOfBirth should be 18 years older
                    if (this.state[control]) {
                        let dob = new Date(this.state[control]).getTime(); //no. of milliseconds since 1970-01-01
                        let today = new Date().getTime(); //no. of milliseconds since 1970-01-01

                        if (today - 18 * 365.25 * 24 * 60 * 60 * 1000 < dob) {
                            errors[control].push("Minimum age is 18 years");
                        }
                    }
                    break;





                default:
                    break;
            }
        });
        this.setState({ errors });
    };
}
export default Register;