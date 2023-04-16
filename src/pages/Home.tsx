import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Home.css'
import React from 'react';

const Home = () => {
    return ( 
        <div className="Home">
            <div className="navbar">
                <p className='fade-in'>Dex</p>
                <p className='Nav_sub_logo_text'><span className='Logo_red_Style'>D</span>ecentralized <span className='Logo_red_Style'>E</span>-Waste e<span className='Logo_red_Style'>X</span>change</p>
                <div className="button_container_div">
                    <button className='navigation_button'><Link className='navigation_link' to='producersignup'><h2>Producer</h2></Link></button>
                    <button className='navigation_button'><Link className='navigation_link' to='recyclersignup'><h2>Recycler</h2></Link></button>
                </div>
            </div>
            <div className="body">
                <div className="customer_education_container_div">
                    <div className="customer_education_div">
                        <h2>Learn how our product benifits you</h2>
                        <h3>
                            <ol>
                                <div><h2>1. Producer:</h2>Registers in the network about the product.</div>
                                <div><h2>2. User:</h2>Registers in the network with the purchase date</div>
                                <div><h2>3. Smart Contract:</h2>Tenure is registered under user name with purchase data and expiration date.</div>
                                <div><h2>4. Recycler:</h2>Registers in the network after the product is recycled or disposed successfully.</div>
                                <br />
                                <div className='temp'><h2>E-Waste declaration</h2></div>
                                <div><button className='navigation_button'><Link className='navigation_link' to='usersignup'><h2>Signup</h2></Link></button></div>
                            </ol>
                        </h3>
                    </div>
                    <div className="cutomer_education_img_div">
                    </div> 
                </div>
            </div>
            <div className="footer">
                <div className="footer_div1">
                    <h3>Products</h3><br />
                    <h4>Why Mailchimp?</h4>
                    <h4>Product Updates</h4>
                    <h4>Websites</h4>
                    <h4>Transactional Email</h4>
                    <h4>How We Compare</h4>
                    <h4>GDPR Compliance</h4>
                    <h4>Security</h4>
                    <h4>Status</h4>
                    <h4>Mobile App</h4>
                </div>
                <div className="footer_div1">
                    <h3>Resources</h3><br />
                    <h4>Marketing Library</h4>
                    <h4>Free Marketing Tools</h4>
                    <h4>Marketing Glossary</h4>
                    <h4>Integrations Directory</h4>
                </div>
                <div className="footer_div1">
                    <h3>Community</h3><br />
                    <h4>Agencies & Freelancers</h4>
                    <h4>Developers</h4>
                    <h4>Events</h4>
                </div>
                <div className="footer_div1">
                    <h3>Company</h3><br />
                    <h4>Our Story</h4>
                    <h4>Newsroom</h4>
                    <h4>Careers</h4>
                    <h4>Transactional Email</h4>
                    <h4>Accessibility</h4>
                </div>
                <div className="footer_div1">
                    <h3>Help</h3><br />
                    <h4>Contact Us</h4>
                    <h4>Hire an Expert</h4>
                    <h4>Help Center</h4>
                    <h4>Talk to Sales</h4>
                </div>
            </div>
        </div>
     );
}
 
export default Home;

// Resources
// Marketing Library
// Free Marketing Tools
// Marketing Glossary
// Integrations Directory
// Community
// Agencies & Freelancers
// Developers
// Events
// Company
// Our Story
// Newsroom
// Give Where You Live
// Careers
// Accessibility
// Help
// Contact Us
// Hire an Expert
// Help Center
// Talk to Sales