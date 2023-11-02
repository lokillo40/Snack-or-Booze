import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/**
 * SnackOrBoozeApi
 * This class provides static methods for making API requests related to snacks and drinks.
 */
class SnackOrBoozeApi {

    /**
     * Fetch all snacks from the API
     * @returns {Array} - Array of snack objects
     */
    static async getSnacks() {
        const result = await axios.get(`${BASE_API_URL}/snacks`);
        return result.data;
    }

    /**
     * Fetch all drinks from the API
     * @returns {Array} - Array of drink objects
     */
    static async getDrinks() {
        const result = await axios.get(`${BASE_API_URL}/drinks`);
        return result.data;
    }

    /**
   * Adds a new snack to the backend.
   * @param {Object} snack - The snack object to add.
   * @returns {Object} The added snack object.
   */
    static async addSnack(snack) {
        const result = await axios.post(`${BASE_API_URL}/snacks`, snack);
        return result.data;
    }

    /**
     * Adds a new drink to the backend.
     * @param {Object} drink - The drink object to add.
     * @returns {Object} The added drink object.
     */
    static async addDrink(drink) {
        const result = await axios.post(`${BASE_API_URL}/drinks`, drink);
        return result.data;
    }

    /**
 * Deletes a snack or drink from the backend based on its type and id.
 * @param {string} type - The type of item ("snacks" or "drinks").
 * @param {string} id - The id of the item to be deleted.
 * @returns {Object} The deleted item object.
 */
    static async deleteItem(type, id) {
        const result = await axios.delete(`${BASE_API_URL}/${type}/${id}`);
        return result.data;
    }
}

export default SnackOrBoozeApi;
