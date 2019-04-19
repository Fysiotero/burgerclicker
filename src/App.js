import React, {Component} from 'react';

import Stats from './Stats';
import Burger from './Burger';

import './App.css';


import iconburger from './icon-burger.png';
import iconcoupon from './icon-coupon.png';
import iconboy from './icon-boy.png';

class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
    this.mouseClicked = this.mouseClicked.bind(this);
  }

  mouseClicked() {
    const clicks = this.state.clicks;
    this.setState({
      clicks: clicks + 1
    });
  }


  render() {
    return (
      <div className="clicker">
        <div className="header">
          <h1>Burger Clicker</h1>
        </div>
        <div className="content content--justified">
          <Stats count={this.state.clicks} />
          <Burger onClick={this.mouseClicked} />
          <Booster boost={3.2}/>
        </div>
        <Menu claimableCoupons={5}/>
      </div>
    );
  }
}



function Booster(props) {
  return (
    <div className="booster">
      {props.boost} burgers / click
    </div>
  );
}

function Menu(props) {
  return (
    <div className="menu">
      <div><img src={iconburger} alt="game" /></div>
      <div><img src={iconcoupon} alt="coupons" /><span className="badge">{props.claimableCoupons}</span></div>
      <div><img src={iconboy} alt="profile" /></div>
    </div>
  );
}

export default Clicker;