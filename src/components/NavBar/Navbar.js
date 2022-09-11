import React from 'react'
import './Navbar.css'

const Navbar = ({ data }) => {
    return (
        <div className='n-wrapper'>
            <div className='n-left'>
                <div className='n-name'>
                    {data.navBarTitle}
                </div>
                {/* <span>toogle</span> */}
            </div>
            <div className='n-right'>
                <div className='n-list'>
                    <ul style={{ listStyleType: "none" }}>
                        {/* <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li> */}
                    </ul>
                </div>
                <button className='button' style={{ width: "100px" }}>
                    {data.contactButtonLabel}
                </button>
            </div>
        </div>
    )
}

export default Navbar