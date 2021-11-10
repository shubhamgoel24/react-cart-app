import './Index.css';
import React from 'react';

class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: '',
            some: ''
        }
        // this.testing();
    }

    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         //in promise setstate acts syncronously but now fixed from version 17 and acts as asynchronous
    //         this.setState(()=>{
    //             this.setState({qty: this.state.qty + 10});
    //             this.setState({qty: this.state.qty + 10});
    //             this.setState({qty: this.state.qty + 10});
    //             console.log('state ',this.state);
    //         })
    //     })
    // }

    // this.increaseQty = this.increaseQty.bind(this);
    //either use above thing or arrow functions like below
    increaseQty = () => {
        //setstate form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // },()=> {this executes after setstate});

        //setstate form 2 if previous state required user this
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            }
        });
    }
    decreaseQty = () => {
        this.setState((prevState) => {
            if(prevState.qty > 1){
                return{
                    qty: prevState.qty - 1
                }
            }
        });
    }
render(){
    // console.log('render');
    const {price, title, qty} = this.state;
  return (
    <div className="cart-item">
        <div className="left-block">
            <img src="" alt="" style={styles.image}/>
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
                    onClick={this.increaseQty}
                />
                <img 
                    src="https://cdn-icons.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1636535934~hmac=cd487cac23909148dad5418e114f2ff0" 
                    alt="decrease" 
                    className="action-icon"
                    onClick={this.decreaseQty}
                />
                <img 
                    src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1636536018~hmac=7cda7a2a3cca436d6872cb29010e5ea9" 
                    alt="delete"   
                    className="action-icon"
                />
            </div>
        </div>
    </div>
  );
}
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