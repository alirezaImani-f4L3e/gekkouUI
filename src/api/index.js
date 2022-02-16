import axios from "axios";

const Axionsbase = axios.create({
  baseURL: "http://localhost:3000",
  
});

export default Axionsbase;
