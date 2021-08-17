import React from 'react';
import '../CSS/navbar.css'
import signin from '../Images/sign-in.svg'
import cart from '../Images/cart.svg'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="container">
            <div className="wrap">
                <div className="leftSide">
                    <Link to="/"><h1 >GYSO.STORE</h1></Link>
                </div>
                <div className="rightSide">
                    <div className="category">
                        <Link to="/E-Commerce">HOME</Link>
                        <Link to="/mens">CATEGORY</Link>
                        <Link to="/product">PRODUCT</Link>
                    </div>
                    <input type="text"></input>
                    <img className="img" src={signin} width="30px" />
                    <img className="img" src={cart} width="30px"/>
                </div>
            </div>
        </div>
    )
}



export default NavBar
