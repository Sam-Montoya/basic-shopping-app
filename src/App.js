import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getProducts } from './service/ProductService.js'
import Details from './components/Details.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productImage: '',
      productPrice: '',
      cartTotal: 0
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    getProducts().then((response) => {
      this.setState({
        products: response
      });
    });
  }

  handleClick(img, price) {
    this.setState({
      productImage: img,
      productPrice: price
    });
  }

  addToCart() {
    var total;
    if (this.state.cartTotal === 0)
      total = Number(this.state.productPrice);
    else
      total = Number(this.state.cartTotal) + Number(this.state.productPrice);

    this.setState({
      cartTotal: total
    })
  }

  render() {
    var products = this.state.products.map((product, i) => {
      return (<ul key={i} className='product'>
        <img alt='' onClick={(click) => this.handleClick(product.image, product.price)}
          src={product.image} />
        <h3>{product.title} </h3>
      </ul>)
    });


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Online Store</h2>
        </div>
        <h1>Cart: {this.state.cartTotal}</h1>
        <Details productImage={this.state.productImage}
          productPrice={this.state.productPrice}
          cartTotal={this.addToCart} />
        <div> {products} </div>
      </div>
    );
  }
}

export default App;
