import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product
        };
    }


    render() {
        return (
            <div className="col-lg-6">
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

                                <div className="float-right mr-2" >
                                    <Link to={`product/${this.state.product.id}`} className=" btn btn-secondary m-2"> Details</Link>
                                    {/* this is for render the parent component button  with the help of children propertie */}
                                    {this.props.children}</div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>);
    }

    componentDidMount() {

    }

}
export default Product;