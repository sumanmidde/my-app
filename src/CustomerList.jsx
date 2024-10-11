import React, { Component } from "react";
import { Link } from "react-router-dom";

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: "Customers",
            count: 5,
            customers: [
            ]

        };
    }



    render() {
        return (
            <div>
                <h6 className="border-bottom m-1 p-1"> {this.state.pageTitle}
                    <span className="btn-secondary m-2">{this.state.count}</span>
                    <Link to="/addCustomer" className="btn btn-primary">
                        Add customer
                    </Link>
                </h6>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Photo</th>
                            <th>Names</th>
                            <th>Phone no</th>
                            <th>Address</th>
                            <th>Options</th>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((cust) => {
                                return (
                                    <tr key={cust.id}>
                                        <td>{cust.id}</td>
                                        <td><img src={cust.photo} alt="customer" />
                                            <button className="btn m-2">
                                                Change picture
                                            </button>
                                        </td>
                                        <td >{cust.name}</td>
                                        <td>{this.getPhoneToRender(cust.phone)}</td>

                                        <td>{(cust.address.city == null) ? "no city" : cust.address.city}</td>
                                        <td>
                                            <Link to={`/updateCustomer/${cust.id}`} className="btn btn-primary"> Edit</Link>
                                            <button className="btn btn-danger m-1" onClick={() => { this.onDelete(cust.id); }}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }


                    </tbody>

                </table>

            </div >
        );
    }
    componentDidMount = async () => {
        document.title = "Customers-eCommerce";
        var response = await fetch("http://localhost:5000/customers", { methosd: "GET" });
        if (response.ok) {
            var body = await response.json();
            this.setState({ customers: body, customersCount: body.length });
        }


    };
    onDelete = async (id) => {
        if (window.confirm("Are you sure to delete this customer?")) {
            let response = await fetch(`http://localhost:5000/customers/${id}`, { method: "DELETE" });
            if (response.ok) {
                var allCustomers = [...this.state.customers];
                allCustomers = allCustomers.filter((cust) => { return cust.id !== id });
                this.setState({ customers: allCustomers });
            }
        }
    };



    // instaded  or this method <td>{cust.phone ? cust.phone :<div className="bg-warning p-2 text-center">no phone</div>}
    //</td>
    getPhoneToRender = (phone) => {
        return (
            phone ? phone : (<div className="bg-warning p-2 text-center">no phone</div>)
        );
    }

}

export default CustomerList;