import "./Navbar.css";

import logo from "../../../images/logo.svg";

export default function Navbar() {
    return(
        <div className="Navbar">
            <div className="container">
           <span className="logo">
            <img src={logo} alt="" />
           </span>

        <nav className="nav">
            <div className="nav_item">
                <img src="../../images/nav_item1.svg" alt="" className="nav_item_img" />
                <p className="nav_item_text"><a href="#">Каталог</a></p>
            </div>

            <div className="nav_item">
                <img src="../../images/nav_item2.svg" alt="" className="nav_item_img" />
                <p className="nav_item_text"><a href="#">Доставка</a></p>
            </div>
        </nav>
            </div>
            </div>
    )
}