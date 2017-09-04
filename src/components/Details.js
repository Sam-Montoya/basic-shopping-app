import React, { Component } from 'react';

class Details extends Component {
    render() {
        return (
            <div>
                <img alt='' className='displayImage' src={this.props.productImage} />
                <h2>${this.props.productPrice} </h2>
                <button onClick={() => this.props.cartTotal()}>Add to Cart</button>
            </div>
        )
    }
}

export default Details;