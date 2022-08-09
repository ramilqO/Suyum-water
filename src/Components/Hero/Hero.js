import "./Hero.css";
import "./adaptive.css";

import Navbar from "./Navbar/Navbar";

import stiker from "../../images/stiker.svg";

export default function Hero() {
    return(
        <div className="Hero">
        <Navbar />
        <div className="main_block">
            <div className="container">

        <div className="main_text">
            <h1 className="title">
                Натуральная питьевая <br /> вода Suyum
            </h1>
            <br />
            <h1 className="subtitle">Вкусная и абсолютно чистая, <br /> насыщенная кислородом</h1>
            <br />
            <button className="main_text_btn"><h1 className="button_text">в каталог</h1></button>
        </div>
        <img src={stiker} />
        </div>
        </div>
        </div>
    )
}