import { Component } from "react";
import { NavLink } from "react-router-dom";


class Navbar extends Component {

    render() {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">eCommerce</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">

                            {!this.props.isLoggedIn ? (<NavLink to="/" className="nav-link" activeClassName="active" aria-current="page" href="/#">LOG IN</NavLink>) : (" ")}
                            {!this.props.isLoggedIn ? (<NavLink to="/register" className="nav-link" activeClassName="active" aria-current="page" href="/#">Register</NavLink>) : (" ")}



                            {this.props.isLoggedIn ? (<NavLink to="/dashboard" className="nav-link" activeClassName="active" href="/#">Dashboard</NavLink>) : ("")}

                            {this.props.isLoggedIn ? (<NavLink to="/cart" className="nav-link" activeClassName="active" href="/#">Shopping Details</NavLink>) : ("")}

                            {this.props.isLoggedIn ? (<NavLink to="/customerList" className="nav-link" activeClassName="active" href="/#">Details</NavLink>) : ("")}

                            {this.props.isLoggedIn ? (<a className="nav-link" activeClassName="active" href="/#" onClick={this.props.onLogOut}>Log out</a>) : ("")}



                        </div>
                    </div>
                </div>
            </nav>
        </div>);
    }
    // when user click the logout button
    onLogOut = (event) => {
        //prevent the page when user click the Logout button
        event.preventDefault();
        this.props.updateLogInStatus(false);
        // history is the globle object It will rediract the login page.
        document.location.hash = "/";

    }
}
export default Navbar;