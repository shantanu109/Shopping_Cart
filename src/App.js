import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';


class App extends React.Component {

  constructor() {

    //This will call the constructor of my parent class 'React'
    super();
    this.state = {

      products: [
        {
          price:999,
          title:'Watch',
          qty:1,
          image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          id:1
        },

        {
          price:99999,
          title:'Phone',
          qty:1,
          image: 'https://images.unsplash.com/photo-1510878933023-e2e2e3942fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
          id:2
        },
        {
          price:99909,
          title:'Laptop',
          qty:1,
          image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
          id:3
        }

      ]
  }
}

handleIncreaseQuantiy = (product) => {

    const {products} = this.state;

    const index = products.indexOf(product)

    products[index].qty += 1

    this.setState({
        //Change the products property
        //products: products
        products
    });

}

handleDecreaseQuantiy = (product) => {


  const {products} = this.state;

  const index = products.indexOf(product)

  if (products[index].qty == 0){

    return;
  }

  products[index].qty -= 1

  this.setState({

        //Change the products property
        //products: products
    products
  });

}

handleDeleteProduct = (id) => {


  const {products} = this.state;

    //This will return me another array and this array will contain products whose id is not equal to the id that is passed
    //[{}]

  const items = products.filter((item) => item.id != id);

  this.setState({


    products: items
    
    });

}

getCartCount = () => {

  const {products} = this.state;

  let count = 0

  products.forEach((product) => {

    count += product.qty;

  })

  return count;
}

getCartTotal = () => {

  const {products} = this.state;

  let totalPrice = 0

  products.map((product) => {

    totalPrice += product.qty * product.price
  });

  return totalPrice;
}

  render() {

    const {products} = this.state
    return (
      <div className="App">
        {/* Calling the function and passing the value*/ }
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantiy}
          onDecreaseQuantity={this.handleDecreaseQuantiy}
          onDeleteProduct = {this.handleDeleteProduct} 
        />
        <div style={{fontSize: 20 , padding:10}}>
          Total : {this.getCartTotal()}
        </div>
      </div> 
    );
  }
}


export default App;
