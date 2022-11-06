import axios from "axios";

const instance = axios.create({
  baseURL: "https://connections-api.herokuapp.com"
})

export const signup = async (signupData) => {
  const { data } = await instance.post("/users/signup", signupData);
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
}

export const login = async (loginData) => {
  const { data } = await instance.post("/users/login", loginData);
  instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
  return data;
}

export default instance;