// import React from 'react';
// import { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// import Wallet from './artifacts/contracts/Wallet.sol/Wallet.json';

// function Popup(props) {
//     const [showPopup, setShowPopup] = useState(false);
  
//     const togglePopup = () => {
//       setShowPopup(!showPopup);
//     };
  

//   const [balance, setBalance] = useState(0);
//   const [amountSend, setAmountSend] = useState();
//   const [address, setAddress] = useState();

//   const [amountWithdraw, setAmountWithdraw] = useState();
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   useEffect(() => {
//     getBalance();
//   }, [])

//   async function getBalance() {
//     if(typeof window.ethereum !== 'undefined') {
//       const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(address, Wallet.abi, provider);
//       try {
//         let overrides = {
//           from: accounts[0]
//         }
//         const data = await contract.getBalance(overrides);
//         setBalance(String(data));
//       }
//       catch(err) {
//         setError('Une erreur est survenue.');
//       }
//     }
//   }

//   async function transfer() {
//     if(!amountSend) {
//       return;
//     }
//     setError('');
//     setSuccess('');
//     if(typeof window.ethereum !== 'undefined') {
//       const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       console.log(address);
//       try {
//         const tx = {
//           from: accounts[0],
//           to: address,
//           value: ethers.utils.parseEther(amountSend)
//         }
//         const transaction = await signer.sendTransaction(tx);
//         await transaction.wait();
//         setAmountSend('');
//         getBalance();
//         setSuccess('Votre argent a bien été transféré sur le portefeuille ! ')
//       }
//       catch(err) {
//         setError('Une erreur est survenue.');
//       }
//     }
//   }

//   async function withdraw() {
//     if(!amountWithdraw) {
//       return;
//     }
//     setError('');
//     setSuccess('');
//     const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(address, Wallet.abi, signer);
//     try {
//       const transaction = await contract.withdrawMoney(accounts[0], ethers.utils.parseEther(amountWithdraw));
//       await transaction.wait();
//       setAmountWithdraw('');
//       getBalance();
//       setSuccess('Votre argent a bien été retiré du portefeuille ! ');
//     }
//     catch(err) {
//       setError('Une erreur est survenue.');
//     }
//   }

//   function changeAmountSend(e) {
//     setAmountSend(e.target.value);
//   }
//   function changeAddress(e) {
//     setAddress(e.target.value);
//   }

//   function changeAmountWithdraw(e) {
//     setAmountWithdraw(e.target.value);
//   }



//   return (
//     <div className="popup">
//       <div className="popup-content">


//       <div className="App">
//       <div className="container">
//         <div className="logo">
//           <i className="fab fa-ethereum"></i>
//         </div>
//         {error && <p className="error">{error}</p>}
//         {success && <p className="success">{success}</p>}
//         <h2>{balance / 10**18} <span className="eth">eth</span></h2>
//         <div className="wallet__flex">
//           <div className="walletG">
//             <h3>Envoyer de l'ether</h3>
//             <input type="text" placeholder="address" onChange={changeAddress} />

//             <input type="text" placeholder="Montant en Ethers" onChange={changeAmountSend} />
//             <button onClick={transfer}>Envoyer</button>
//           </div>
//           <div className="walletD">
//             <h3>Retirer de l'ether</h3>
//             <input type="text" placeholder="Montant en Ethers" onChange={changeAmountWithdraw} />
//             <button onClick={withdraw}>Retirer</button>
//           </div>
//         </div>

//       </div>
//     </div> 

//         <button className="close-button" onClick={props.handleClose}>X</button>
//         {props.content}
//       </div>
//     </div>
//   );
// }

// export default Popup;
