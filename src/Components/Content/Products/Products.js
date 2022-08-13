import "./Products.css";

import image1 from "./images/image_1.svg";
import image2 from "./images/image 2.svg";
import image3 from "./images/image 3.svg";
import button from "./images/button.svg";
// import mobileImage1 from "./images/image_1_mobile.svg";

export default function Products() {
    return(
        <div className="Products">
         <div className="product">
             <img src={image1} className="desktop_image" alt="img" />
             <p className="product_name">Вода <br /> питьевая</p>
             <img src={button} className="button" />
             </div>

            <div className="product">
             <img src={image2} alt="" />
             <img src={image3} className="image_3"/>
                <p className="product_name">Оборудование <br /> и аксессуары</p>
             <img src={button} alt="" className="button" />
         </div>
        </div>
    )
}