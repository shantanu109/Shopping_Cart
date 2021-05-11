import React from 'react';
import CartItem from './CartItem'


//This is my class component and we are inheriting using 'extends' keyword from class 'Component' inside 'React' package

class Cart extends React.Component {
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

    render(){
        const {products} = this.state;
        return (

            <div className="cart">
                
                {products.map((product) => {
                    return (
                    <CartItem 
                        product={product} 
                        key={product.id}
                    />
                    )
                })}
            </div>

        );
    }
    
}


export default Cart;





