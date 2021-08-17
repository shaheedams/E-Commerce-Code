import React from 'react'
import '../CSS/homePage.css'
import {products} from '../products'

const HomePage = () => {
    return (
        <div className="homeContainer">
            <div className="homeWrap">
                <div className="banner">
                    <img src="https://assets.ajio.com/medias/sys_master/images/images/h2b/h82/34772646952990/17082021-d-unisex-topcarousel-p4-shorts-tees-halfprice.jpg" />
                </div>
                <div className="bankOffer">
                    <img src="https://assets.ajio.com/medias/sys_master/images/images/ha7/h93/34775661674526/17082021-d-unisex-alliances-hsbc.jpg"></img>
                </div>
                <div className="offers">
                    <div className="title">
                        <img src="https://assets.ajio.com/medias/sys_master/images/images/h9f/h86/34348649840670/05082021-d-unisex-banner1-sectionheader.jpg"></img>
                    </div>
                    <div className="product">
                        <img src="https://assets.ajio.com/medias/sys_master/images/images/he7/he0/34720836648990/17082021-d-unisex-flashdeal-flipflops-under499.jpg"></img>
                    </div>
                </div>
                {products.map(i => {
                    return (
                        <div className="offer2">
                            <div className="title">
                            <img src={i.title}></img>
                            </div>
                            <div className="product">
                                {i.products.map(p => {
                                    return (
                                        <img className="hover" src={p}></img>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                
           </div>
        </div>
    )
}

export default HomePage
