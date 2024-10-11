
import React, { Component } from "react";

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "user@gmail.com",
            password: "1234",
            massage: ""
        };

    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 mx-auto">
                    <h3 className="m-2 p-1 border-bottom">Login form</h3>
                    <div className="form-group form-row">
                        <label className="col-lg-4">Email</label>
                        <span>
                            <input type="text" className="form-control" value={this.state.email} onChange={(event) => {
                                this.setState({
                                    email: event.target.value
                                });

                            }} />
                        </span>
                    </div>
                    <div className="form-group form-row">
                        <label className="col-lg-4">Password</label>
                        <span>
                            <input type="password" className="form-control" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                        </span>
                    </div>

                    <div className="text-right m-2">

                        <button className="btn btn-primary" onClick={this.onLogInClick}>
                            Login
                        </button>
                        {this.state.message}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        document.title = "Login-eCommerce";
    }
    onLogInClick = async () => {


        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`, { method: "GET" });
        var body = await response.json();
        console.log(body);
        if (body.length > 0) {
            this.setState({ message: <span className="text-success">login successfully</span> });
            //for this enable the all nav btns
            this.props.updateLogInStatus(true);
            //this will rediract the dashboard after login
            this.props.history.replace("/dashboard");
        } else {
            this.setState({ message: <span className="text-danger"> invalid credentials</span> });
        }
    }


}
export default LogIn;