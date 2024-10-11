import React, { Component } from "react";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.css";

class ShoppingCart extends Component {
    // start the Mounting phase
    constructor(props) {
        super(props);// calling the constructor super()class from the Component classs
        // constructor is the only place to declare a state,this is refference keyword of current class 
        this.state = {
            products: [


            ]
        };
    }

    render() {
        return (
            <div className="contianer-fluid">
                <h4>Shopping Carts</h4>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return (
                            <div><Product key={prod.id} product={prod}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            >
                                <button className="btn btn-primary">Buy Now</button>
                            </Product>


                            </div>);
                    })}
                </div>


            </div>

        );
    }
    // after constructor and render() method it will execute.
    componentDidMount = async () => {
        //fetch the data from the data source or Instaded this code we are using the asyn and await to avoid the multiple arrow functions

        /* var promise = fetch("http://localhost:5000/products", { method: "GET" });
         promise.then((response) => {
             console.log(response);
             var promise2 = response.json();
             promise2.then((prod) => {
                 console.log(prod);
                 this.setState({ products: prod });
             });
         });*/
        document.title = "cart-eCommerce";
        var response = await fetch("http://localhost:5000/products", { method: "GET" });
        var prod = await response.json();
        console.log(response);
        this.setState({ products: prod });

    };
    componentDidUpdate() {

    };
    componentWillUnmount() {

    };

    handleIncrement = (product, maxValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quentity < maxValue) {
            allProducts[index].quentity++;
            this.setState({ products: allProducts });

        }



    };
    handleDecrement = (product, minValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quentity > minValue) {
            allProducts[index].quentity--;
            this.setState({ products: allProducts });
        }

    };
    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (window.confirm("Are you want to delete this")) {
            allProducts.splice(index, 1);
            this.setState({ products: allProducts });
        }

    };


} export default ShoppingCart; 
