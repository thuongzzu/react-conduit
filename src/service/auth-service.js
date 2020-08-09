import axios from "axios";

const API_URL = "https://conduit.productionready.io/api/";

const login = (user) => {
  console.log(API_URL + "users/login", {
    user
  })
  return axios
    .post(API_URL + "users/login", { user })
    .then((response) => {
      console.log(response)
      localStorage.setItem('jwt', JSON.stringify(response.data.user.token));
      localStorage.setItem('user', JSON.stringify(response.data.user))

      return response.data;
    });
};


export default {
  login,

}