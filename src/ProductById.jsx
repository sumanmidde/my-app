import React, { Component } from "react";
import { Link } from "react-router-dom";


class ProductById extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }


    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <div className="card m-2">
                        <div className="card-body">
                            <div className="text-muted"># {this.state.product.id}
                                <span className="pull-right hand-icon " onClick={() => { this.props.onDelete(this.state.product) }}>
                                    <i className="fa fa-times"></i>
                                </span>
                                <h4 className="border-top pt-5"> {this.state.product.productName}</h4>
                                <div> ${this.state.product.price}</div>

                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="float-left">
                                <span className="info">{this.state.product.quentity}</span>
                                <div className="btn-group">
                                    <button className="btn btn-outline-success" onClick={() => { this.props.onIncrement(this.state.product, 10); }}>+</button>
                                    <button className="btn btn-outline-success" onClick={() => { this.props.onDecrement(this.state.product, 0); }}>-</button>
                                </div>
                            </div>
                            <div className="float-right " >
                                <Link to="/cart" className="btn btn-secondary m-2">Back</Link>
                                {this.props.children}</div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount = async () => {
        document.title = `${this.state.product.productName}-eCommerce`;
        console.log(this.props.match.params.id);
        //this for the know the actual id 
        var id = this.props.match.params.id;
        // console.log(id, "dghugh");
        //send the request based on the Id Params

        var response = await fetch(`http://localhost:5000/products/${id}`, { method: "GET" });
        // convert data into the json format
        var body = await response.json();
        //check the body
        if (body.length > 0) {
            //update the data body is new data with help of setState()method
            this.setState({ product: body });
        }

    };



}
export default ProductById;