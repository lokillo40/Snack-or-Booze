import React, { useState, useEffect } from "react";
import SnackOrBoozeApi from "./Api";

/**
 * Home Component
 * Displays the number of available snacks and drinks.
 */
function Home() {
  const [data, setData] = useState({ snacks: [], drinks: [] });

  useEffect(() => {
    async function fetchData() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setData({ snacks, drinks });
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Snack or Booze</h1>
      <p>We have {data.snacks.length} snacks and {data.drinks.length} drinks available.</p>
    </div>
  );
}

export default Home;
