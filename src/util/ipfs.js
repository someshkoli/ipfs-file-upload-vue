const IPFS=require('ipfs-http-client');
const ipfs=new IPFS({host:'ipfs.infura.io',port:5001,protocol:'http'});
console.log("this is ipfs  "+ipfs);
export default ipfs;
