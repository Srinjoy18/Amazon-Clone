import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_contents'>
                <div className='footer_column'>
                <p className='footer_title'>Get to Know Us</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Cares</p>
                <p>Gift a Smile</p>
                </div>
                <div className='footer_column'>
                <p className='footer_title'>Connect with Us</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
                </div>
                <div className='footer_column'>
                <p className='footer_title'>Make Money with Us</p>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Amazon Global Settings</p>
                <p>Become an Affiliate</p>
                <p>Advertise your Products</p>
                <p>Amazon Pay Merchants</p>
                <p>Fullfilment by Amazon</p>
                </div>
                <div className='footer_column'>
                <p className='footer_title'>Let Us Help You</p>
                <p>Covid-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Download the App</p>
                <p>Help</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
