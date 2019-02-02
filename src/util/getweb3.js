
const Web3=require('web3');
let web3;
let provider;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
  console.log("oye hoye");
} else {
  // We are on the server *OR* the user is not running metamask
  provider = new Web3.providers.HttpProvider(
    'http://192.168.6.138:22001'
  );
  web3 = new Web3(provider);
}
export default web3;