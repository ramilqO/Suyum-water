import "./Navbar.css";
import "./adaptive.css";

import logo from "../../../images/logo.svg";
import navItem from "../../../images/nav_item1.svg";
import navItem2 from "../../../images/nav_item2.svg";
import polygon from "../../../images/navbar_polygon.svg";
import basket from "../../../images/basket.svg";
import hamburger from "../../../images/hamburger.svg";

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

        <div className="contacts">
        <button className="submit_btn"><a className="button_a" href="#">Быстрый заказ</a></button>
        <div className="number">
            <p className="number_text">+7(916)171-27-67</p>
            <img src={polygon}  className="polygon" />
        </div>

         <img className="basket" src={basket} /> {/*this is not a picture, you need to fix it */}
         <img src={hamburger} />
        </div>

        </div>
     </div>
    )
}