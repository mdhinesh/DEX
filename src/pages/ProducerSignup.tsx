import { MenuItem, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import '../styles/ProducerSignup.css'

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

const ProducerSignup = () => {


    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        producerName: '',
        producerEmail: '', 
        producerWalletAddress: '',
    });
    
    const handleInputChange = (event : any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const jsonData = JSON.stringify(formData);
        console.log(jsonData);
        const fproducerdata = jsonData.toString();
        console.log(fproducerdata);
        console.log(typeof(fproducerdata));

        const encodedData = encodeURIComponent(fproducerdata);

        const url = `${encodedData}`;

        console.log(url);
        

        // // Code to store the quiz data in the firebase database
        // const res = fetch("https://brainbuster-fba66-default-rtdb.asia-southeast1.firebasedatabase.app/quiz.json",
        // {
        //     method: "POST",
        //     body: JSON.stringify(jsonData),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        
        setTimeout(() => {
            navigate('/');
        }, 1000);
    };
        
    return ( 
        <div className="signup">
            <p className='signup_header'>Producer</p>
            <div className='signup_card'>
                <div className="signup_div">
                    <form onSubmit={handleSubmit}>
                        <div className="form_elements">
                            <TextField type="text" name="producerName" id="outlined-basic" variant="outlined" placeholder="Producer name" onChange={handleInputChange} required/>
                            <br /> 
                            <TextField type="text"  name="producerEmail" id="outlined-basic" variant="outlined" placeholder="Producer email" onChange={handleInputChange} required/>
                            <br /> 
                            <TextField type="text" name="producerWalletAddress" id="outlined-basic" variant="outlined" placeholder="wallet address" onChange={handleInputChange} required/>
                            <br /> 
                            <Button type='submit' className='button_1' variant="contained"><h2>Submit</h2></Button>
                        </div>
                    </form>
                </div>
            </div>        
        </div>
     );
}
 
export default ProducerSignup;