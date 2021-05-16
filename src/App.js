import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase'


class App extends React.Component {

  constructor() {

    //This will call the constructor of my parent class 'React'
    super();
    this.state = {

      products: [],
      loading : true
  }
  this.db = firebase.firestore();
}

componentDidMount (){

  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);

  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data())
  //     });

  //     const products = snapshot.docs.map((doc) => {
  //       const data = doc.data();

  //       data['id'] = doc.id
  //       return data;
  //     })

  //     this.setState({
  //       products,
  //       loading : false
  //     })
  //   })


  this.db
    .collection('products')
    // .where('price','==',3999)
    .orderBy('price')
    //This whole callback will be fired whenever onSnapshot is called, and onSnapshot is called whenever something changes in our products collection
    .onSnapshot((snapshot) => {
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data())
      });

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id
        return data;
      })

      this.setState({
        products,
        loading : false
      })
    })
}

handleIncreaseQuantiy = (product) => {

    const {products} = this.state;

    const index = products.indexOf(product)

    // products[index].qty += 1

    // this.setState({
    //     //Change the products property
    //     //products: products
    //     products
    // });

    //Reference of that particular product

    const docRef = this.db.collection('products').doc(products[index].id);
    

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Updated successfully')
      })
      .catch((error) => {

        console.log('Error', error);

      })

}

handleDecreaseQuantiy = (product) => {


  const {products} = this.state;

  const index = products.indexOf(product)

  if (products[index].qty == 0){

    return;
  }

  // products[index].qty -= 1

  // this.setState({

  //       //Change the products property
  //       //products: products
  //   products
  // });

  const docRef = this.db.collection('products').doc(products[index].id);
    

  docRef
    .update({
      qty: products[index].qty - 1
    })
    .then(() => {
      console.log('Updated successfully')
    })
    .catch((error) => {

      console.log('Error', error);

    });

}

handleDeleteProduct = (id) => {


  const {products} = this.state;

    //This will return me another array and this array will contain products whose id is not equal to the id that is passed
    //[{}]

//   const items = products.filter((item) => item.id != id);

//   this.setState({


//     products: items
    
//     });

// }

  const docRef = this.db.collection('products').doc(id);

  docRef
    .delete()
    .then(() => {
      console.log('Deleted successfully')
    })
    .catch((error) => {

      console.log('Error', error);

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

    if (product.qty>0){

      totalPrice += product.qty * product.price
    }
    return '';
    
  });

  return totalPrice;
}

addProduct = () => {
  this.db
    .collection('products')
    //.add called with our product and will return me a promise
    .add({
      image: '',
      price: 900,
      qty: 3,
      title: 'Washing Machine'
    })
    .then((docRef) => {
      console.log('Product has been added', docRef)

    })
    .catch((error) => {
      console.log('Error:', error);
    })
}

  render() {

    const {products,loading} = this.state
    return (
      <div className="App">
        {/* Calling the function and passing the value*/ }
        <Navbar count={this.getCartCount()} />
        {/* <button style={{padding:20 , fontSize: 20}} onClick={this.addProduct}>Add a product</button> */}
        <Cart
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantiy}
          onDecreaseQuantity={this.handleDecreaseQuantiy}
          onDeleteProduct = {this.handleDeleteProduct} 
        />

        {loading && <h1>Loading Products...</h1>}
        <div style={{fontSize: 20 , padding:10}}>
          Total : {this.getCartTotal()}
        </div>
      </div> 
    );
  }
}


export default App;
