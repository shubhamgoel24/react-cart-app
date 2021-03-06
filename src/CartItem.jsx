import './Index.css';
import React from 'react';

const CartItem = (props) => {
    const {price, title, qty,id,img} = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img src={img} alt="product-img" style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: '#777'}}>Rs. {price}</div>
                <div style={{color: '#777'}}>Qty: {qty}</div>

                <div className="cart-item-actions">
                    <img 
                        src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1636535986~hmac=65509e2fd6346ca66b116e3911d8c702" 
                        alt="increase" 
                        className="action-icon"
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img 
                        src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1636535934~hmac=cd487cac23909148dad5418e114f2ff0" 
                        alt="decrease" 
                        className="action-icon"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                        src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1636536018~hmac=7cda7a2a3cca436d6872cb29010e5ea9" 
                        alt="delete"   
                        className="action-icon"
                        onClick= {() => onDeleteProduct(id)}
                    />
                </div>
            </div>
        </div>
    );
}


const styles = {
    image:{
        height:110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;