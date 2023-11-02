// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import NewItemForm from "./NewItemForm";
import SnackOrBoozeApi from "./Api";
import "./App.css";

/**
 * Main App Component.
 * 
 * Sets up the main application structure, including routing.
 * Renders the NavBar and defines routes for Home, FoodMenu (for both snacks and drinks),
 * individual FoodItem details, and NewItemForm for adding new items.
 */
function App() {
    const [data, setData] = useState({ snacks: [], drinks: [] });

    // Fetch snacks and drinks from the API when the component mounts.
    useEffect(() => {
        async function fetchData() {
            let snacks = await SnackOrBoozeApi.getSnacks();
            let drinks = await SnackOrBoozeApi.getDrinks();
            setData({ snacks, drinks });
        }
        fetchData();
    }, []);

    /**
     * Refreshes the list of snacks and drinks by fetching updated data from the API.
     */
    function refreshData() {
        async function fetchData() {
            let snacks = await SnackOrBoozeApi.getSnacks();
            let drinks = await SnackOrBoozeApi.getDrinks();
            setData({ snacks, drinks });
        }
        fetchData();
    }

    /**
     * Handles the deletion of an item (either a snack or drink) by calling the API.
     * After deletion, it refreshes the data to reflect the changes.
     * 
     * @param {string} type - The type of the item to delete ("snacks" or "drinks").
     * @param {string} id - The id of the item to delete.
     */
    function handleDelete(type, id) {
        SnackOrBoozeApi.deleteItem(type, id);
        refreshData();
    }

    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/snacks" render={() => <FoodMenu type="snacks" />} />
                <Route exact path="/drinks" render={() => <FoodMenu type="drinks" />} />
                <Route exact path="/add-snack" render={() => <NewItemForm type="snacks" refreshData={refreshData} />} />
                <Route exact path="/add-drink" render={() => <NewItemForm type="drinks" refreshData={refreshData} />} />
                <Route exact path="/snacks/:id" render={routeProps => {
                    const { id } = routeProps.match.params;
                    const item = data.snacks.find(item => item.id === id);
                    if (!item) return <Redirect to="/snacks" />;
                    return <FoodItem item={item} deleteItem={() => handleDelete("snacks", id)} />;
                }} />
                <Route exact path="/drinks/:id" render={routeProps => {
                    const { id } = routeProps.match.params;
                    const item = data.drinks.find(item => item.id === id);
                    if (!item) return <Redirect to="/drinks" />;
                    return <FoodItem item={item} deleteItem={() => handleDelete("drinks", id)} />;
                }} />
                <Route render={() => <h1>404 - Not Found</h1>} />
            </Switch>
        </Router>
    );
}

export default App;