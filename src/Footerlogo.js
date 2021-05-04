import React from 'react'
import { Link } from 'react-router-dom'
import './Footerlogo.css'

function Footerlogo() {
    return (
        <div className='footer_logo'>
            <Link to='/'>
                <img className='footer_image' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link>
            <p className='footer_alert'>(c) Amazon Clone Made By: Srinjoy Burman :)</p>
        </div>
    )
}

export default Footerlogo