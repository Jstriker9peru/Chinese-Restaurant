import React, { useState, useEffect } from 'react';
import './SingleItem.scss';

const SingleItem = ({ item, update, remove }) => {
    const { _id, name, imageURL, price, quantity } = item;
    const [disabled, setDisabled] = useState(false);
    const [quantityValue, changeQuantityValue] = useState(quantity);
    
    useEffect(() => {
        setDisabled(quantityValue === quantity || quantityValue === "");
    }, [quantityValue, quantity])

    const addQuantity = () => {
        if (quantityValue === "") {
            changeQuantityValue(1);
        } else if (quantityValue < 20) {
            changeQuantityValue(quantityValue + 1);
        }
    }
    const subQuantity = () => {
        if (quantityValue > 0) {
            changeQuantityValue(quantityValue - 1);
        }
    }
    const handleChange = event => {
        const targetVal = event.target.value !== "" ? parseInt(event.target.value) : "";
        const inRange = targetVal >= 0 && targetVal <= 20;
        if (inRange) {
            changeQuantityValue(targetVal);
        }
    }
    const handleUpdate = () => {
        if (quantityValue === 0) {
            remove(_id);
        } else {
            update(_id, quantityValue);
            setDisabled(true);
        }
    }
    
    const removeItem = () => {
        remove(_id);
    }
    return (
        <li className="meal-item">
            <div className="meal-image-container"> 
                <img className="meal-image" src={`/images${imageURL}`} alt={name} />
            </div>
            <div className="meal-desc">
                <span className="name">{name}</span>
            </div>
            <div className="price">
                <p className="price">${price.toFixed(2)}</p> 
            </div>
            <div className="quantity">
                <div className="quantity-control">
                    <div className="box minus" onClick={subQuantity}>
                        <i className="fas fa-minus"></i>
                    </div>
                    <input className="box number" name="quantity" type="number" min="0" max="20" value={quantityValue} onChange={handleChange} />
                    <div className="box plus" onClick={addQuantity}>
                        <i className="fas fa-plus"></i>
                    </div>
                </div>
            </div>
            <div className="remove">
                <button type="button" onClick={handleUpdate} disabled={disabled} className="update-btn">
                    <span>Update</span>
                </button>
                <button onClick={removeItem} className="remove-btn">
                    <i className="far fa-trash-alt"></i>
                    <span>Remove</span>
                </button>
            </div>
        </li>
    )
}

export default SingleItem;
