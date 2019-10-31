import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7e04b7354b91a34ad9ec489989242e4121f2ad940e38926cb5f3fd6818033176"
  }
});
