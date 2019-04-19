import React from 'react';
import { Link } from 'react-router-dom';

import iconburger from './Images/icon-burger.png';
import iconcoupon from './Images/icon-coupon.png';
import iconboy from './Images/icon-boy.png';

function Menu(props) {
    return (
        <div className="menu">
        <Link to="/"><div><img src={iconburger} alt="game" /></div></Link>
        <Link to="/coupons"><div><img src={iconcoupon} alt="coupons" /><span className="badge">{props.claimableCoupons}</span></div></Link>
        <Link to="/profile"><div><img src={iconboy} alt="profile" /></div></Link>
        </div>
    );
}

export default Menu;