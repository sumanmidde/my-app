import React, { Component } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import LogIn from "./LogIn";
import ShoppingCart from "./ShoppingCart";
import CustomerList from "./CustomerList";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

import Sidebar from "./Sidebar";
import ProductById from "./ProductById";
import InsertCustomer from "./InsertCustomer";
import UpdateCustomer from "./UpdateCustomer";
import Register from "./Register";



// this is run in Ecomm-db.json file use this json-server Ecomm-db.json --watch --port=5000 command.
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    };


    render() {
        return (
            <HashRouter >
                <Navbar isLoggedIn={this.state.isLoggedIn} updateLogInStatus={this.updateLogInStatus} />
                <div className="container-fluid" >
                    <div className="row">
                        <div className="col-lg-3">
                            {this.state.isLoggedIn ? (<Sidebar />) : ("")}

                        </div>
                        <div className="col-lg-9">
                            <Switch>

                                <Route path="/" exact render={(props) => (<LogIn {...props} updateLogInStatus={this.updateLogInStatus} />)} />
                                <Route path="/dashboard" exact component={Dashboard} />
                                <Route path="/customerList" exact component={CustomerList} />
                                <Route path="/cart" exact component={ShoppingCart} />
                                <Route path="/addCustomer" exact component={InsertCustomer} />
                                <Route path="/register" exact component={Register} />
                                <Route path="/product/:id" component={ProductById} />
                                <Route path="/updateCustomer/:id" component={UpdateCustomer} />
                                <Route path="*" exact component={NoMatchPage} />

                            </Switch>
                        </div>

                    </div>


                </div>
            </HashRouter>
        );
    }
    updateLogInStatus = (status) => {
        this.setState({ isLoggedIn: status });
    }
}
export default App;