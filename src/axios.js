import axios from "axios";

const instance = axios.create({
  baseURL: "https://goodle-uz.herokuapp.com/",
});

export default instance;
