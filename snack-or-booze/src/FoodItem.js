import React from "react";

/**
 * FoodItem Component
 * Displays details about a specific food or drink item.
 * In addition, it provides a button to delete the item.
 * @param {object} item - Object containing details about a food or drink item
 */
function FoodItem({ item, deleteItem }) {
    return (
      <div className="FoodItem">
        <h1>{item.name}</h1>
        <p><strong>Description:</strong> {item.description}</p>
        <p><strong>Recipe:</strong> {item.recipe}</p>
        <p><strong>Serve:</strong> {item.serve}</p>
        <button onClick={deleteItem}>Delete</button>
      </div>
    );
  }
  
  export default FoodItem;
