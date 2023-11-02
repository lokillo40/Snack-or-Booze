import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import "./FoodMenu.css";

/**
 * FoodMenu Component
 * Displays a list of either snacks or drinks based on the provided type prop.
 * @param {string} type - "snacks" or "drinks"
 */
function FoodMenu({ type }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = type === "snacks" ? await SnackOrBoozeApi.getSnacks() : await SnackOrBoozeApi.getDrinks();
      setItems(data);
    }
    fetchData();
  }, [type]);

  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}><Link to={`/${type}/${item.id}`}>{item.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default FoodMenu;
