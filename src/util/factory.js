import web3 from "./getWeb3";
import Factory from "./build/Factory.json";

const instance = new web3.eth.Contract(
    JSON.parse(Factory.interface), "0x574593f7b82134741a7cc710c50c28c6a6d6e1c5"
);

export default instance;

