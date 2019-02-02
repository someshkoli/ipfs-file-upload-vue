
// import Web3 from "./getweb3.js";
// const address = '0xfa20cba2021d6c006a6e90b97fcc624aa0082445';
// //use the ABI from your contract
// const abi = [{"constant":true,"inputs":[],"name":"getHash","outputs":[{"name":"x","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"x","type":"string"}],"name":"sendHash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
// const storehash=new Web3.eth.Contract(abi,address);
// console.log(storehash);
// export default storehash;

import web3 from './getweb3';
import factory from "./build/factory.json";
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
//const address = '0xfa20cba2021d6c006a6e90b97fcc624aa0082445';
//use the ABI from your contract
const instance = new web3.eth.Contract(JSON.parse(factory.interface), "0xfa20cba2021d6c006a6e90b97fcc624aa0082445");
console.log(instance);
export default instance;