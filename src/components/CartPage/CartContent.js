import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { changeQuantity, removeFromCart } from '../actions/cartActions';
import SingleItem from './SingleItem';
import TotalSidebar from './TotalSidebar';
import './CartContent.scss';
import Title from '../Title/Title';

const CartContent = ({ items, update, remove, total, totalItems }) => {
    useEffect(() => {
        console.log('hello');
    }, [items])
    let addedItems = items.length ?
        (  
            items.map(item => {
                return (                    
                    <SingleItem key={item._id} item={item} update={update} remove={remove} />                        
                )
            })
        ):

        (
            <div className="meal-item empty">
                <p className="no-items">No items added</p>
            </div>
        )
    return (
        <div className="container">
            <div className="cart">
                <div className="row">
                    <Title title={'My Cart'} />
                </div>
                <ul className="cart-items">
                    <li className="titles">
                        <div className="product-title">Product</div>
                        <div className="price-title">Price</div>
                        <div className="quantity-title">Quantity</div>
                    </li>
                    {addedItems}
                </ul>
            </div>
            <TotalSidebar total={total} totalItems={totalItems} items={items} />  
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.cart.addedItems,
        total: state.cart.total,
        totalItems: state.cart.totalItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: (id, quantity) => {
            dispatch(changeQuantity(id, quantity));
        },
        remove: (id) => {
            dispatch(removeFromCart(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);
