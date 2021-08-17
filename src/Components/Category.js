import React from 'react'
import {mens} from '../mensProduct.js'

const Category = () => {
    return (
        <div className="homeContainer">
            <div className="homeWrap">
                <div className="banner">
                    <img src="https://assets.ajio.com/medias/sys_master/images/images/h38/h96/34734723399710/16082021-D-MHP-topbanner-p1-4070.jpg" />
                </div>
                <div className="bankOffer">
                    <img src="https://assets.ajio.com/medias/sys_master/images/images/ha7/h93/34775661674526/17082021-d-unisex-alliances-hsbc.jpg"></img>
                </div>
                {mens.map(i => {
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

export default Category
