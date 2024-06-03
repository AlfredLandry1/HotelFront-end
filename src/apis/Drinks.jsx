import Axios from "./Axios";

const Drinks = async () => {
  try {
    const response = await Axios.get("/boissons/");

    if (response.status === 201) {
      // L'inscription a réussi
      console.log("bien");
      return true;
    } else {
      // Une erreur s'est produite
      const error = new Error(
        `Drinks request failed: ${response.status}`
      );
      throw error;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default Drinks;
