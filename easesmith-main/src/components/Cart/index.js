import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart-con'>
                <div>
                    <p className='cart-head'>Your Cart</p>
                    <hr />
                </div>
                <h1 className='congo'>Congratulations <br /> Order Placed!</h1>
                <img src='https://res.cloudinary.com/drpddho9b/image/upload/v1729356492/plant_1_qekpzr.png' alt='pot' />
                <p className='cart-para'>Thank you for choosing Chaperone services. <br />
                    We will soon get in touch with you!</p>
                <Link to='/'><button className='continue-button'>CONTINUE SHOPPING</button></Link>
            </div>
        </div>
    )
}

export default Cart