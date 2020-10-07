import React, { Component } from 'react'

class Price extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "precio": 0
        };
    }

    //When component is updated and if there is newPrice add (or substract) it
    //to the total price (this.state.price)
    async componentDidUpdate() {
        if (this.props.isNewPrice) {
            let precio = await this.props.getPrecio();
            this.setState({ ...this.state, precio: this.state.precio + precio})
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.precio}€</p>    
            </div>
        )
    }
}

export default Price
