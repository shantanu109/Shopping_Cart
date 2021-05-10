import React from 'react';

//This is my class component and we are inheriting using 'extends' keyword from class 'Component' inside 'React' package

class CartItem extends React.Component {
    //For a class component to be a React component, we need to give it one method and that method is called 'Render'
    //State
    constructor() {
        //This will call the constructor of my parent class 'React'
        super();
        this.state = {
            price:99999,
            title:'Phone',
            qty:1,
            image: ''
        }
    }

    increaseQuantity = () => {
        console.log(this);
    }
    render(){
        //method returns JSX that describes the UI for the component

        const {price,title,qty} = this.state

        return (

            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>

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
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620664673~hmac=5a7969abe7d44e91271e4eb88679ea10" 
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/vstatic/svg/1214/1214428.svg?token=exp=1620664750~hmac=82e36387e075d0ae62eafa80a42bf451" 
                        />


                    </div>

                </div>

            </div>

        );
    }
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





