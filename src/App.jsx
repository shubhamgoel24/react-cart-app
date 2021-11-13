import React from 'react';
import './App.css';
import Cart from './Cart'
import NavBar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 19999,
                title: 'Mobile Phone',
                qty: 2,
                img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                id: 1
            },
            {
                price: 1999,
                title: 'Smart Watch',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
                id: 2
            },
            {
                price: 68999,
                title: 'Laptop',
                qty: 5,
                img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
                id: 3
            }
        ]
    }
  }

  handleIncreaseQuantity = (product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;
      this.setState({
          products: products
      })
  }

  handleDecreaseQuantity = (product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty <= 1){
          return;
      }

      products[index].qty -= 1;
      this.setState({
          // products: products
          products
      })
  }

  handleDeleteProduct = (id) =>{
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id );

      this.setState({
          products: items
      });
  }

  getCartCount = () =>{
    const {products} = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  }

  getTotalPrice = () =>{
    const {products} = this.state;
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.qty;
    });
    return total;
  }

  render(){
    const {products} = this.state
    return (
      <div className="App">
        <NavBar
          count = {this.getCartCount()}
        />
        <h1>Cart</h1>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize:20}}>
          Total: {this.getTotalPrice()}
        </div>
      </div>
    );
  }
}

export default App;
