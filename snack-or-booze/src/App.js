import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import FoodItem from "./FoodItem";
import NewItemForm from "./NewItemForm";
import NotFound from "./NotFound";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const snacksData = await SnackOrBoozeApi.getSnacks();
        const drinksData = await SnackOrBoozeApi.getDrinks();
        setSnacks(snacksData);
        setDrinks(drinksData);
        setIsLoading(false);
      } catch (e) {
        console.error("Error loading data:", e);
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <FoodMenu snacks={snacks} />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <FoodMenu drinks={drinks} />
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route path="/add">
              <NewItemForm />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
