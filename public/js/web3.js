// web3.js
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log("Connected account:", accounts[0]);
      alert("Wallet connected: " + accounts[0]);
      // Further logic after successful connection can be added here
    } catch (error) {
      console.error("Error connecting to wallet:", error);
      alert("Error connecting to wallet");
    }
  } else {
    alert("Please install a MetaMask wallet to use this feature");
  }
}

document.getElementById('connect-wallet').addEventListener('click', connectWallet);
