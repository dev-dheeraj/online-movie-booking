import axios from "axios";
const baseUrl = "http://3.17.216.66:4000"; // live url
// const baseUrl = "http://127.0.0.1:8000/movie"; // local test

export const get = async (url) => {
  try {
    let response = await axios.get(baseUrl + url);
    return response;
  } catch (error) {
    return error;
  }
};
export const post = async (url, data) => {
  try {
    let response = await axios.post(baseUrl + url, data);
    return response;
  } catch (error) {
    return error;
  }
};

// export default {
//   get,
//   post,
// };
