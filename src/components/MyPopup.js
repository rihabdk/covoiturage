import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ABI from '../artifacts/contracts/Wallet.sol/Wallet.json'
// import './Popup.css';
//import Popup from './Popup';

function MyPopup() {
    const [showPopup, setShowPopup] = useState(false);
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    const {abi} = ABI



  const [balance, setBalance] = useState(0);
  const [amountSend, setAmountSend] = useState();
  const [address, setAddress] = useState();

  const [amountWithdraw, setAmountWithdraw] = useState();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    getBalance();
  }, [])

  async function getBalance() {
    if(typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(" 0x5FbDB2315678afecb367f032d93F642f64180aa3",abi, provider);
      try {
        let overrides = {
          from: accounts[0]
        }
        const data = await contract.getBalance(overrides);
        setBalance(String(data));
      }
      catch(err) {
        setError('');
      }
    }
  }

  async function transfer() {
    if(!amountSend) {
      return;
    }
    setError('');
    setSuccess('');
    if(typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(address);
      try {
        const tx = {
          from: accounts[0],
          to: address,
          value: ethers.utils.parseEther(amountSend)
        }

        const transaction = await signer.sendTransaction(tx);
        await transaction.wait();

        setAmountSend('');
        getBalance();
        setSuccess('The transaction is accomplished !')
      }
      catch(err) {
        setError('');
      }
    }
  }

  async function withdraw() {
    if(!amountWithdraw) {
      return;
    }
    setError('');
    setSuccess('');
    const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);
    try {
      const transaction = await contract.withdrawMoney(accounts[0], ethers.utils.parseEther(amountWithdraw));
      await transaction.wait();
      setAmountWithdraw('');
      getBalance();
      setSuccess('Votre argent a bien été retiré du portefeuille ! ');
    }
    catch(err) {
      setError('');
    }
  }

  function changeAmountSend(e) {
    setAmountSend(e.target.value);
    
  }
  function changeAddress(e) {
    setAddress(e.target.value);
  }

  function changeAmountWithdraw(e) {
    setAmountWithdraw(e.target.value);
  }

  return ( 
  <div>
    <Popup trigger={<button class="btn btn-success" > PAY </button>} offsetX={-500}    offsetY={-400} contentStyle={{ width: '300px', height: '250px' }}>
    <div className="Popup">
      <div className="container">
        <div className="logo">
          <i className="fab fa-ethereum"></i>
        </div>
        {error && <p className="error">{error}</p>}
        {success && <p className="success" style={{color:"blue"}} >{success}</p>}
        <div className="wallet__flex">
          <div className="walletG">
            <h3> Send tokens </h3> <div>
            <input type="text" placeholder="Address" onChange={changeAddress} /> </div>
<div>
            <input type="text" placeholder="Amount" onChange={changeAmountSend} /> </div>
            <div>
            <button class="btn btn-success" onClick={transfer}>Send</button> </div>

          </div>
        
        </div>

      </div>
    </div>  
  </Popup>
  </div>
  );
}

export default MyPopup;
