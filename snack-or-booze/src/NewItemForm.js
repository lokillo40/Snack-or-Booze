import React, { useState } from "react";
import { useHistory } from "react-router-dom";  
import SnackOrBoozeApi from "./Api";

/**
 * NewItemForm Component.
 * 
 * This component displays a form that allows users to add new snacks or drinks.
 * On successful submission, it adds the item to the backend and redirects the user 
 * to the respective list of items (either snacks or drinks).
 */

function NewItemForm({ type, refreshData }) {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        recipe: "",
        serve: ""
    });

    const history = useHistory();

    /**
     * Handles form data change.
     * Updates formData state with new data.
     * 
     * @param {Event} evt - A React synthetic event object.
     */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    /**
     * Handles form submission.
     * Adds the new item to the backend, refreshes data in the main App component,
     * and redirects user to the respective list of items.
     * 
     * @param {Event} evt - A React synthetic event object.
     */
    async function handleSubmit(evt) {
        evt.preventDefault();
        if (type === "snacks") {
            await SnackOrBoozeApi.addSnack(formData);
            history.push("/snacks");
        } else {
            await SnackOrBoozeApi.addDrink(formData);
            history.push("/drinks");
        }
        refreshData();
    }

    return (
        <div className="NewItemForm">
            <h1>New {type.slice(0, -1)}</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="recipe">Recipe:</label>
                    <input
                        id="recipe"
                        name="recipe"
                        value={formData.recipe}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="serve">Serve:</label>
                    <input
                        id="serve"
                        name="serve"
                        value={formData.serve}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default NewItemForm;
