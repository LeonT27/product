import React, { Component } from 'react';
import './EditableTD';
import EditableTD from './EditableTD';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products
        };
    }

    handleProductChange = (e) => {
        const productId = e.target.parentElement.parentElement.id;
        const column = e.target.id;
        const value = e.target.value;
        let productsList = this.state.products;
        for (var i = 0; i < productsList.length; i++) {
            if (productsList[i]['no'] === Number(productId)) {
                if(e.target.validity.valid) {
                    productsList[i][column] = value;
                }
                break;
            }
        }
        this.setState({
            products: productsList
        });
    };

    render() {
        const products = this.state.products;
        const productsList = products.map((product) => {
            return <tr id={product.no} key={product.no}>
                <td>{product.no}</td>
                <td>{product.name}</td>
                <EditableTD id="quantity" value={product.quantity} onInputChange={this.handleProductChange} />
                <EditableTD value={product.price} id="price" onInputChange={this.handleProductChange} />
            </tr>
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{productsList}</tbody>
            </table>
        );
    }
}

export default ProductTable;