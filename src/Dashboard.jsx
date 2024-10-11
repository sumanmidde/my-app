import React, { Component } from "react";
class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>DashBoard</h3>
            </div>
        );
    }
    componentDidMount() {
        document.title = "Dashboad-eCommerce";
    };

}
export default Dashboard;