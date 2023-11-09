// import React from "react";
// import axios from "axios";
import Axios from "./Axios";

const NewsletterAPI = async (data) => {
  try {
    const response = await Axios.post("/newsletters/", data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default NewsletterAPI;

// import axios from "axios";

// export const NewsletterAPI = () => {
//   return new Promise((onSuccess, onFail) => {
//     axios.get("http://127.0.0.1:8000/api/newsletters/").then((response, error) => {
//       if (!response || error) {
//         return onFail(`response failure : ${error}`);
//       }
//       onSuccess(response);
//     });
//   });
// };
