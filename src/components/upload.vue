<template>
  <div>
    <h1>input file</h1>
    <input type="file" @change="captureFile">
    <button @click="upload">submit</button>
  </div>
</template>
<script>
console.log("asdasd");
//import Buffer from "../util/buffer.js";
import web3 from "../util/getweb3.js";
import ipfs from "../util/ipfs.js";
import storehash from "../util/storehash.js";
console.log("sdadsdas");
export default {
  data() {
    return {
      image: "",
      ipfsHash: null,
      buffer: "",
      ethAddress: "",
      blockNumber: "",
      transactionHash: "",
      gasUsed: "",
      txReceipt: ""
    };
  },
  methods: {
    captureFile(event) {
      event.stopPropagation();
      event.preventDefault();
      const file = event.target.files[0];
      let reader = new window.FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = () => this.convertToBuffer(reader);
    },
    async convertToBuffer(reader) {
      //file is converted to a buffer for upload to IPFS
      const Bufferdata = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
      this.buffer = Bufferdata;
      console.log("BUF" + this.buffer);
    },
    async upload() {
      event.preventDefault();
      const accounts = await web3.eth.getAccounts();
      console.log("Sending from Metamask account: " + accounts[0]);
      console.log("this is koli"+ storehash);
      const EthAddress = await storehash.options.address;
      console.log("dot");
      this.ethAddress = EthAddress;
      console.log("eth address::" + this.ethAddress);
      //save document to IPFS,return its hash#, and set hash# to sta
      //https://github.com/ipfs/interface-ipfs-core/blob/master/SPEC/FILES.md#add
      console.log("hello ipfs"+ipfs);
      await ipfs.files.add(this.buffer, (err, IpfsHash) => {
                      console.log("dot");

        console.log("ipfshash: " + IpfsHash);
        //setState by setting ipfsHash to ipfsHash[0].hash
        this.ipfsHash = IpfsHash[0].hash;
        // call Ethereum contract method "sendHash" and .send IPFS hash to etheruem contract
        //return the transaction hash from the ethereum contract
        //see, this https://web3js.readthedocs.io/en/1.0/web3-eth-contract.html#methods-mymethod-send
              console.log("dot");

        storehash.methods.sendHash(this.ipfsHash).send(
          {
            from: accounts[0]
          }
        ); //storehash
      }); //await ipfs.add
    }
  }
};
</script>