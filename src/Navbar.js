import React from 'react';

//This is my class component and we are inheriting using 'extends' keyword from class 'Component' inside 'React' package

const Navbar = (props) => {

    return (

        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1620840125~hmac=02f0359bd6b17d4cf1a9dc678eb9b824" alt="car-icon"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
                

        </div>

    );
}



const styles = {

    cartIcon: {
        height:32,
        marginRight:20
    },
    nav: {
        height:70,
        background: '#4267b2',
        display:'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};


export default Navbar;





