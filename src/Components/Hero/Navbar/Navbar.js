import "./Navbar.css";

import logo from "../../../images/logo.svg";
import navItem from "../../../images/nav_item1.svg";
import navItem2 from "../../../images/nav_item2.svg";


export default function Navbar() {
    return(
        <div className="Navbar">
            <div className="container">
           <span className="logo">
            <img src={logo} alt="" />
           </span>

        <nav className="nav">
            <div className="nav_item">
                <img src={navItem} alt="" className="nav_item_img" />
            <a href="#" className="nav_item_text">Каталог</a>
            </div>

            <div className="nav_item">
                <img src={navItem2} alt="" className="nav_item_img" />
            <a href="#" className="nav_item_text">Доставка</a>
            </div>
        </nav>
        <button className="submit_btn">Быстрый заказ</button>
            </div>
            </div>
    )
}