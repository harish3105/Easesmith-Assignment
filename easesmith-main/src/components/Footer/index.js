import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import './index.css'

const Footer = () => {
    return (
        <div className='footer'> 
            <footer>
                <div className='footer-main'>
                    <div className="footer-section" >
                        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                        <p>Lorem ipsum dolor sit amet. Aut Ipsam Illum Et Nostrum Quidem Aut Necessibus Enim.</p>
                        <form>
                            <input type="email" placeholder="Enter Your Email Address" />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>

                    <div className="container">
                        <div className="footer-section">
                            <h3>ABOUT US</h3>
                            <div>
                                <p>Our Story</p>
                                <p>Blogs</p>
                                <p>Careers</p>
                                <p>Contact Us</p>
                                <p>Help & Support</p>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>OUR SERVICES</h3>
                            <div>
                                <p>Book Maali</p>
                                <p>Plant Day Care</p>
                                <p>Rent Plants</p>
                                <p>Plants & Pots</p>
                                <p>Gardening Tools</p>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>USEFUL LINKS</h3>
                            <div>
                                <p>My Account</p>
                                <p>Orders & Returns</p>
                                <p>Track Order</p>
                                <p>Terms & Conditions</p>
                                <p>Privacy Popcy</p>
                                <p>Return, Refund & Replacement Popcy</p>
                            </div>
                        </div>

                        <div className="footer-section">
                            <h3>GET IN TOUCH</h3>
                            <p>Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57, Gurgaon, Haryana, India 122003</p>
                            <p>Call: +919958287272</p>
                            <p>Email: care@chaperoneplants.com</p>
                        </div>
                    </div>
                </div>


                <div className='footer-title'>
                    <h3>CHAMPERONE</h3>
                    <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
                </div>
                <div className='footer-title'>
                    <h3>Follow us on</h3>
                    <div className="social-links">
                        <FaInstagram fontSize={24} />
                        <FaFacebook fontSize={24} />
                        <BsFillThreadsFill fontSize={24} />
                        <FaYoutube fontSize={24} />
                        <FaLinkedin fontSize={24} />
                    </div>
                </div>


            </footer>
            <div ><hr style={{width: '89vw', marginTop:'10px'}} /></div>
            <div className="footer-bottom">
                <p>&copy; 2023, chaperone.com All rights reserved.</p>

            </div>
        </div>
    )
}

export default Footer