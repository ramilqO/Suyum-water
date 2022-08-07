import "./Hero.css";
import "./adaptive.css";

import Navbar from "./Navbar/Navbar";

export default function Hero() {
    return(
        <div className="Hero">
        <Navbar />
        <div className="main_text">
            <h1 className="title">
                Натуральная питьевая <br /> вода Suyum
            </h1>
        </div>
        </div>
    )
}