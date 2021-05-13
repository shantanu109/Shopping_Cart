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
          image: '',
          id:1
        },

        {
          price:99999,
          title:'Phone',
          qty:1,
          image: '',
          id:2
        },
        {
          price:99909,
          title:'Laptop',
          qty:1,
          image: '',
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
      </div>
    );
  }
}


export default App;
