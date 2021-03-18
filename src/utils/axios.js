import axios from 'axios'

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/plain",
    },
  };

const instance = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    timeout:3000,
    https: config       
})
//? Here we can add headers

export default instance;