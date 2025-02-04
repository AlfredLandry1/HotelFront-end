import Axios from "./Axios";

const NewsletterAPI = async (data) => {
  try {
    const response = await Axios.post("/newsletters/", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      // L'inscription a réussi
      return true;
    } else {
      // Une erreur s'est produite
      const error = new Error(
        `Newsletter subscription failed: ${response.status}`
      );
      throw error;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default NewsletterAPI;
