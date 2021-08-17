import React from 'react'
import '../CSS/productPage.css'
const ProductPage = () => {
    return (
        <div className="productContainer">
            <div className="imageSection">
                <img src="https://assets.ajio.com/medias/sys_master/root/20210405/tB5l/606ca226aeb269a9e385877f/-473Wx593H-410278342-174-MODEL6.jpg"></img>
            </div>
            <div className="detailsSection">
                <div className="productDetail">
                    <h3 style={{marginBottom:"15px"}}>Stretch Piquet Polo T-shirt with Contrast Tipping</h3>
                    <p style={{ marginLeft: "20px" ,marginBottom:"15px"}}>Rs.2,500</p>
                    <p style={{marginBottom:"15px"}}> Size Avaliable : M , L, XL, XXL</p>
                </div>
                <div className="downSection">
                    <div className="location">
                        <form>
                            <input type="text" placeholder="Enter your PinCode" style={{ width: "200px",marginBottom:"15px" }}></input>
                            <button className="btn" style={{marginBottom:"15px"}}>Check</button>
                        </form>
                    </div>
                    <div className="buying">
                        <button  className="btn btnWhite" style={{marginBottom:"15px"}}>ADD TO CART</button>
                        <button  className="btn btngray" style={{marginBottom:"15px"}}>BUY NOW</button>
                    </div>
                </div>
                <div className="fullDetails">
                    <h2>Product Details:</h2>
                    <p>Regular Fit<br/>
                        Machine wash cold<br/>
                        95% cotton, 5% elastane<br/>
                        Product Code: 410278342021<br/>
                        About REPLAY<br/>
                        MRP
                        :
                        Rs. 4,999.00 inclusive of all taxes(MRP changes as per size selection)<br/>
                        Marketed By
                        :
                        Reliance Brands Limited, M-1 K-Square Compound,Opp Urban Tadka Village Kurund,Nr Toll Naka Mumbai-Nashik Highway,BHIWANDI,- 421101.Maharashtra, India<br/>
                        Net Qty
                        :
                        1 N<br/>
                        Imported By
                        :
                        Reliance Brands Limited, M-1 K-Square Compound,Opp Urban Tadka Village Kurund,Nr Toll Naka Mumbai-Nashik Highway,BHIWANDI,- 421101.Maharashtra, India<br/>
                        Country Of Origin
                        :
                        BANGLADESH<br/>
                        Customer Care Address
                        :
                        AJIO, c/o Reliance Retail Limited, SS Plaza, 74/2 Outer Ring Road, 29th Main Road, BTM 1st Stage, BTM Layout, Bangalore 560068, Karnataka, INDIA. Ph. 1800-889-9991. E-mail - customercare@ajio.com<br/>
                        Commodity
                        :
                        Men's Tshirts</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
