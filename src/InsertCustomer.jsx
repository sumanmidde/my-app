import React, { Component } from 'react';

class InsertCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", city: "", phone: "", photo: ""
        };
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form>
                        <h4>Insert customer</h4>
                        {/* customer field. */}
                        <div className="form-group form-row">
                            <label className="col-lg-4">customer name </label>
                            <div className="col-lg-8 ">
                                <input type="text" className="form-control" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }); }}></input>

                            </div>
                        </div>
                        {/* end the customer field */}
                        {/* city field. */}
                        <div className="form-group form-row">
                            <label className="col-lg-4">city </label>
                            <div className="col-lg-8 ">
                                <input type="text" className="form-control" value={this.state.city} onChange={(e) => { this.setState({ city: e.target.value }); }}></input>

                            </div>
                        </div>
                        {/* end the city field */}
                        {/* phone field. */}
                        <div className="form-group form-row">
                            <label className="col-lg-4">phone </label>
                            <div className="col-lg-8 ">
                                <input type="text" className="form-control" value={this.state.phone} onChange={(e) => { this.setState({ phone: e.target.value }); }}></input>

                            </div>
                        </div>
                        {/* end the phone field */}
                        {/* photo field. */}
                        <div className="form-group form-row">
                            <label className="col-lg-4">photo </label>
                            <div className="col-lg-8 ">
                                <input type="text" className="form-control" value={this.state.photo} onChange={(e) => { this.setState({ photo: e.target.value }); }}></input>

                            </div>
                        </div>
                        {/* end the photo field */}
                        <div className="border-top p-1">
                            <button className="btn btn-success" onClick={this.onSave}> save</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
    onSave = async (event) => {
        event.preventDefault();
        var customer = { name: this.state.name, address: { city: this.state.city }, phone: this.state.phone, photo: this.state.photo };
        var response = await fetch("http://localhost:5000/customers", { method: "POST", body: JSON.stringify(customer), headers: { "content-type": "application/json" } });
        var body = await response.json();
        console.log(body);
        if (body) {
            this.props.history.replace("/customerList");
        }

    };
}

export default InsertCustomer;