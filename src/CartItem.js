import React from 'react';

//This is my class component and we are inheriting using 'extends' keyword from class 'Component' inside 'React' package

const CartItem = (props) => {
    //For a class component to be a React component, we need to give it one method and that method is called 'Render'
    //State
   
    
        //method returns JSX that describes the UI for the component

    const {price,title,qty} = props.product;
    console.log(props)

    const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = props;

    return (

        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.image}/>

            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">

                    {/*Buttons*/}
                    <img 
                    alt="increase" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620664721~hmac=e6d765139f66af8a71e0d53c886e9038" 
                    onClick={() => onIncreaseQuantity(product)}
                    />
                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620664673~hmac=5a7969abe7d44e91271e4eb88679ea10" 
                    onClick={() => onDecreaseQuantity(product)}
                    />
                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620664750~hmac=82e36387e075d0ae62eafa80a42bf451" 
                    onClick={() => onDeleteProduct(product.id)}
                    />


                </div>

            </div>

        </div>

    );
}


const styles ={
    image:{
      height:110,
      width:100,
      borderRadius:4,
      background:'#ccc'
    }
  
  }

export default CartItem;





