import React from 'react';
import iconburger from './Images/icon-burger.png';
import iconcoupon from './Images/icon-coupon.png';
import iconboy from './Images/icon-boy.png';

function Menu(props) {
    return (
        <div className="menu">
        <div><img src={iconburger} alt="game" /></div>
        <div><img src={iconcoupon} alt="coupons" /><span className="badge">{props.claimableCoupons}</span></div>
        <div><img src={iconboy} alt="profile" /></div>
        </div>
    );
}

export default Menu;