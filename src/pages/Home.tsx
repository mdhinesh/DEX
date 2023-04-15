import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

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
                        <h2>Learn how to use our Product</h2>
                        <h3>
                            <ol>
                                <div><h2>1. Producer:</h2>Registers in the network about the product.</div>
                                <div><h2>2. User:</h2>Registers in the network with the purchase date</div>
                                <div><h2>3. Smart Contract:</h2>Tenure is registered under user name with purchase data and expiration date.</div>
                                <div><h2>4. Recycler:</h2>Registers in the network after the product is recycled or disposed successfully.</div>
                            </ol>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;