import { MenuItem, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import '../styles/recyclersignup.css'

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const recyclingpartners = [
    { value: 'partner1', label: 'Partner 1' },
    { value: 'partner2', label: 'Partner 2' },
    { value: 'partner3', label: 'Partner 3' },
  ];
  

const recyclersignup = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        recyclerName: '',
        recyclerWalletAddress: '',
        recyclerEmail: '',
    });
    
    const handleInputChange = (event : any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };
        
    return ( 
        <div className="signup">
            <p className='signup_header'>Recycler</p>
            <div className='signup_card'>
                <div className="signup_div">
                    <form onSubmit={handleSubmit}>
                        <div className="form_elements">
                            <TextField type="text" name="recyclerName" id="outlined-basic" variant="outlined" placeholder="Recycler name" onChange={handleInputChange} required/>
                            <br /> 
                            <TextField type="text"  name="recyclerWalletAddress" id="outlined-basic" variant="outlined" placeholder="Recycler email" onChange={handleInputChange} required/>
                            <br /> 
                            <TextField type="text" name="recyclerEmail" id="outlined-basic" variant="outlined" placeholder="wallet address" onChange={handleInputChange} required/>
                            <br /> 
                            <Button type='submit' className='button_1' variant="contained"><h2>Submit</h2></Button>
                        </div>
                    </form>
                </div>
            </div>        
        </div>
     );
}
 
export default recyclersignup;