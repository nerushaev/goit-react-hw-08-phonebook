import axios from "axios"

const instance = axios.create({
  baseURL: "https://635bced1aa7c3f113dc6c622.mockapi.io/api/contacts",
  params: {
    _limit: 12,
  }
})

export const getContacts = async () => {
  const { data } = await instance.get("/");
  return data;
}

export const addContacts = async (data) => {
  const { data: result } = await instance.post("/", data);
  return result;
}

export const removeContacts = async (id) => {
  const { data } = await instance.delete(`/${id}`);
  return data;
}
