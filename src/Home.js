import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Mi11Ultra/GW/Display_Brightness/D22087666_WLD_Xiaomi_Mi11_Ultra_NewLaunch_tallhero_1500x600._CB654923743_.jpg" alt=""/>
            <div className="home_row">
                <Product 
                    id={"980"}
                    title="Apple iPhone 11 (256GB) - Black" 
                    price={"69990"} 
                    image='https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_SL1500_.jpg' 
                    rating={5}
                />
                <Product
                    id={"981"} 
                    title="ASUS ROG Strix Scar 15 (2021), 15.6' FHD 300Hz/3ms, AMD Ryzen 9 5900HX, GeForce RTX 3080 " 
                    price={"249500"}
                    image='https://images-na.ssl-images-amazon.com/images/I/81Xa7ORzWLL._AC_SL1500_.jpg' 
                    rating={4}
                />
                <Product 
                    id={"982"}
                    title="Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS" 
                    price={"30900"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/717WeOKf-TL._AC_SL1500_.jpg' 
                    rating={3}
                />
            </div>

            <div className="home_row">
                <Product 
                    id={"983"}
                    title="US Polo Men's Solid Regular Fit T-Shirt" 
                    price={"990"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81jPpNg6CYL._AC_UL1500_.jpg' 
                    rating={4}
                />
                <Product 
                    id={"984"}
                    title="Sparx Men SM-162 Casual Shoes" 
                    price={"1590"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/61L4ZMMwgCL._AC_UL1110_.jpg' 
                    rating={5}
                />
                <Product 
                    id={"985"}
                    title="Ray-Ban unisex-adult RX7186 Plastic Prescription Eyewear FramesBlue 51 mm" 
                    price={"9150"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/517MNHo5euL._AC_UL1500_.jpg' 
                    rating={3}
                />
                <Product 
                    id={"986"}
                    title="American Tourister Copa 22 Ltrs Black Casual Backpack (FU9 (0) 09 002" 
                    price={"999"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/91j7Ch6h2aL._AC_SL1500_.jpg' 
                    rating={4}
                />
            </div>

            <div className="home_row">
                <Product 
                    id={"986"}
                    title="Roads to Mussoorie - By Ruskin Bond Paperback - 1 June 2005" 
                    price={"195"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51NX9Glo4yL._SX311_BO1,204,203,200_.jpg' 
                    rating={5}
                />
                <Product 
                    id={"987"}
                    title="CasaCraft by Pepperfry - Lola Lounge Chair in Multicoloured Striped Pattern" 
                    price={"6499"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71nRu4S6-zL._AC_SL1210_.jpg' 
                    rating={3}
                />
            </div>
            <div className="home_row">
                <Product 
                    id={"988"}
                    title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)" 
                    price={"45550"} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._AC_SL1500_.jpg' 
                    rating={5}
                />
            </div>
        </div>
    </div>
    )    
}

export default Home
