import React from "react";
import ReactDOM from "react-dom/client";

const logoPath = "data:image/png;base64,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";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img  alt="logo"className="logo" src={logoPath}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const foodImg = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ekcrdo9r7vwgw6o9lhsz";
const RestorantCart = () => {
   return(
    <div className="cart">
        <img src={foodImg} />
        <h2>Cart item</h2>
        <p><span>Rating : 4.4</span> 35-40 mins</p>
        <h5>North Indian, Indian  </h5>
    </div>
   )
}
const MainContainer = () => {
    return(
        <div className="main-container">
            <div className="search-area">
                Search
            </div>
            <div className="cart-area">
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                <RestorantCart/>
                
            </div>
        </div>
    )
}

const Footer =()=> {
    return(
        <div className="footer">
            <p>&copy; 2026 My App. All rights reserved.</p>
        </div>
    )
}

const LayoutComponent = () =>{
    return(
        <>
        <div className="page-layout">
            <Header/>
            <MainContainer />
            <Footer/>
        </div>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LayoutComponent />);