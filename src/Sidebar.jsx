import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Sidebar extends Component {
    render() {
        return (<div className="mt-2">
            <h4 className="border-bottom p-1">Sidebar</h4>
            <div className="list-group mt-2">
                <NavLink to="/dashboard" className="list-group-item list-group-item-action" activeClassName="active"> Dashboard     </NavLink>
                <NavLink to="/cart" className="list-group-item list-group-item-action" activeClassName="active"> ShoppingCart    </NavLink>
                <NavLink to="/customerList" className="list-group-item list-group-item-action" activeClassName="active"> Details     </NavLink>

            </div>

        </div>);
    }
}
export default Sidebar;