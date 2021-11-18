import React from 'react';
import './App.css';
import Cart from './Cart'
import NavBar from './NavBar';
import { getFirestore } from "firebase/firestore"
import { collection, onSnapshot, addDoc, updateDoc, doc, deleteDoc,query,where,orderBy,getDocs } from "firebase/firestore";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.coll = collection(getFirestore(),'products');
  }

  async componentDidMount(){
    // const db = getFirestore();
    // const coll = collection(db, "products");
    // onSnapshot(query(this.coll,where('price','>',2000)), (querySnapshot) => {
    // onSnapshot(query(this.coll,orderBy('qty')), (querySnapshot) => {
    // onSnapshot(query(this.coll,orderBy('qty','desc')), (querySnapshot) => {
    // onSnapshot(query(this.coll,where('price','>',2000),orderBy('price','asc')), (querySnapshot) => {
    // onSnapshot(query(this.coll,where('price','>',2000),where('title','==','Laptop')), (querySnapshot) => {
    onSnapshot(this.coll, (querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        // console.log(doc.data());
        const data = doc.data();
        data['id'] = doc.id;
        return data; 
      });

      this.setState({
        products,
        loading: false
      });
    });
  }

  handleIncreaseQuantity = async (product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);

      // products[index].qty += 1;
      // this.setState({
      //     products: products
      // })

      await updateDoc(doc(this.coll,products[index].id), {
        qty: products[index].qty + 1
      });
  }

  handleDecreaseQuantity = async(product) =>{
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty <= 1){
          return;
      }

      // products[index].qty -= 1;
      // this.setState({
      //     // products: products
      //     products
      // })
      await updateDoc(doc(this.coll,products[index].id), {
        qty: products[index].qty - 1
      });
  }

  handleDeleteProduct = async(id) =>{
      // const {products} = this.state;
      // const items = products.filter((item) => item.id !== id );

      // this.setState({
      //     products: items
      // });
      await deleteDoc(doc(this.coll, id));
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

  addProduct = async() => {
    const doclist = await getDocs(this.coll);
    doclist.forEach((doc) => {
      this.handleDeleteProduct(doc.id);
    });
    await addDoc(collection(getFirestore(),'products'), {
      price: 1999,
      title: 'Smart Watch',
      qty: 4,
      img: 'https://images.unsplash.com/photo-1617625802912-cde586faf331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    });

    await addDoc(collection(getFirestore(),'products'), {
      price: 19999,
      title: 'Mobile',
      qty: 1,
      img: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
    });

    await addDoc(collection(getFirestore(),'products'), {
      price: 68999,
      title: 'Laptop',
      qty: 5,
      img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',       
    });
  }

  render(){
    const {products,loading} = this.state
    return (
      <div className="App">
        <NavBar
          count = {this.getCartCount()}
        />
        <h1>Cart</h1>
        <button onClick={this.addProduct}>Reset Cart</button>
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && 
          <h1>Loading Products ...</h1>
        }
        <div style={{fontSize:20}}>
          Total: {this.getTotalPrice()}
        </div>
      </div>
    );
  }
}

export default App;
