/* eslint-disable no-unused-vars */

import image1 from "../assets/pizza-image-1.jpg"
import image2 from "../assets/pizza-image-2.jpg"
import image3 from "../assets/pizza-image-3.jpg"
import image4 from "../assets/pizza-image-4.jpg"
import image5 from "../assets/pizza-image-5.jpg"
import image6 from "../assets/pizza-image-6.jpg"
import dirnk1 from "../assets/cola.jpg"
import dirnk2 from "../assets/sprit.jpg"
import {TypeAnimation} from "react-type-animation"
import "./MenuItems.css"
import { FaShoppingCart } from "react-icons/fa";

const MenuItems = () => {
  return (
    <div className="menu-items">
        <div>
        <FaShoppingCart className="menu-shoppingCart" size={30}/>
        </div>
        <h1>
        <TypeAnimation
                sequence={[
                `Menu Items`,2000,
                1000, ` `,
                 ]}

            wrapper="div"
            speed={50}
            cursor={true}
            
            style={{ fontSize: '1em', paddingLeft: "6px" }}
            repeat={Infinity}
            />
        </h1>
        <div className="menu-item-titel">
            <h2>
                <TypeAnimation
                sequence={[
                `Pizza`,2000,
                1000, ` `,
                 ]} wrapper="div" speed={50} cursor={true}
            
                style={{ fontSize: '1em', paddingLeft: "6px" }}
                repeat={Infinity}
            />
            </h2>
        </div>
        
        <div className="items">
            <div className="menu-item">
                <img src={image1}/>
                <div>
                    <p>Pizza</p>
                    <p>200p</p>

                </div>
                <div className="menu-cart"><p>Add To Cart </p></div>

            </div>
            <div className="menu-item">
                <img src={image2}/>
                <div><p>Pizza</p><p>200p</p></div>
                <div className="menu-cart"><p>Add To Cart </p></div>

            </div>
            <div className="menu-item">
                <img src={image3}/>
                <div><p>Pizza</p><p>200p</p></div>
                <div className="menu-cart"><p>Add To Cart </p></div>
            </div>
            
        </div>
        
        <div className="items">
            <div className="menu-item">
                <img src={image4}/>
                <div><p>Pizza</p><p>200p</p></div>
                <div className="menu-cart"><p>Add To Cart </p></div>

            </div>
            <div className="menu-item">
                <img src={image5}/>
                <div><p>Pizza</p><p>200p</p></div>
                <div className="menu-cart"><p>Add To Cart </p></div>

            </div>
            <div className="menu-item">
                <img src={image6}/>
                <div><p>Pizza</p><p>200p</p></div>
                <div className="menu-cart"><p>Add To Cart </p></div>

            </div>
        </div>
        <div className="menu-item-titel">
            <h2>
                <TypeAnimation
                sequence={[
                `Drinks`,2000,
                1000, ` `,
                 ]} wrapper="div" speed={50} cursor={true}
            
                style={{ fontSize: '1em', paddingLeft: "6px" }}
                repeat={Infinity}
            />
            </h2>
        </div>
        <div className="items">
            <div className="menu-item">
                <img src={dirnk1}/>
                <div><p>Cola</p><p>200p</p></div>
                <div className="menu-cart" ><p>Add To Cart </p></div>

            </div>
            <div className="menu-item">
                <img src={dirnk2}/>
                <div><p>Sprit</p><p>200p</p></div>
                <div className="menu-cart"><p>Add To Cart </p></div>

            </div>
        </div>
        
    </div>
  )
}

export default MenuItems