import React from 'react';

const NavBar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1636780478~hmac=affa7feb0460d3d812c7be2e82f5ed12" alt="cart-icon" />
                <span style={styles.cartCount}> {props.count} </span>
            </div>
        </div>
    );
}


const styles = {
    cartIcon:{
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: 'blue',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer:{
        position: 'relative'
    },
    cartCount:{
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}


export default NavBar;