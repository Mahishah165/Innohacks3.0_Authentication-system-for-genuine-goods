import web3 from "./web3";
import manuFactory from "./build/manufacturerFactory.json";

const instance = new web3.eth.Contract(
  manuFactory.abi,
  "0x7Aedc43F464103806311eCd259CEcc0c2c015Dd9"
);

export default instance;