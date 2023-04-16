import { MenuItem, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import '../styles/ProducerSignup.css'

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { getAddress } from 'ethers';
//@ts-ignore
import { Web3Provider } from '@ethersproject/providers';

import { useNavigate } from 'react-router-dom';

const ProducerSignup = () => {

    const abi = [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "AddedProducer",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "AddedRecycler",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "tprodinput",
              "type": "string"
            }
          ],
          "name": "Addproducer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "trecyinput",
              "type": "string"
            }
          ],
          "name": "AddRecycler",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "tinput",
              "type": "string"
            }
          ],
          "name": "AddWaste",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "name": "WasteAdded",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "MaxProducerID",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MaxRecyclerID",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "MaxWasteID",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "pid",
              "type": "uint8"
            }
          ],
          "name": "retProducerID",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "rid",
              "type": "uint8"
            }
          ],
          "name": "retRecyclerID",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "wid",
              "type": "uint8"
            }
          ],
          "name": "retWasteID",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];
      


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

        const produrl = `${encodedData}`;

        console.log(produrl);
        
        Clicker(produrl);   

        setTimeout(() => {
            navigate('/');
        }, 1000);
    };
        
    const [currentAccount, setCurrentAccount] = useState(''); //fetched from metamask
    const [correctNetwork, setCorrectNetwork] = useState(false); //fetched from metamask
    
    const connectWallet = async () => {
        try {
            //@ts-ignore
          const { ethereum } = window;
          if (!ethereum) {
            alert('Metamask Not Found ! Get MetaMask and Try Again.');
            return;
          }
    
          let chainId = await ethereum.request({ method: 'eth_chainId' });
          console.log(chainId);
          const shardeumChainId = '0xaa36a7';
          if (chainId !== shardeumChainId) {
            alert('Please Connect to sapolina Testnet');
            return;
          }
          else {
            setCorrectNetwork(true);
          }
    
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          setCurrentAccount(accounts[0]);
        } catch (error) {
          console.log(error);
        }
      }
    
    const Clicker = async (tempvar: string) => {
        try {
            //@ts-ignore
          const { ethereum } = window;
          const data = tempvar;
          alert(data);
          if (ethereum) {
            //setting up provider
            const provider = new Web3Provider(ethereum);
            const signer = provider.getSigner();
            console.log('signer : ', signer);
            //@ts-ignore
            const VoteContract = new ethers.Contract('0xd51CDee5ed0E6761BbC108646485F01540Db1564', abi, signer);
            console.log('VoteContract : ', VoteContract);
            //calling the smart contract
            VoteContract.Addproducer(data).then(
              response => {
                console.log('response is : ', response);
              }
            ).catch(err => {
              console.log(err);
            });
    
          }
          else {
            console.log('Ethereum object not found');
          }
        } catch (error) {
          console.log(error);
        }
      }
    
      useEffect(() => {
        connectWallet();
      }, []);
    

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
                            <Button type='submit'  
                                className='button_1' 
                                variant="contained"
                                // onClick={Clicker}
                            ><h2>Submit</h2></Button>
                        </div>
                    </form>
                </div>
            </div>        
        </div>
     );
}
 
export default ProducerSignup;




// const App = () => {


  
  
//   return (
//     <div>
//       <button onClick={Clicker}>Click</button>
//     </div>
//   );
// };

// export default App;