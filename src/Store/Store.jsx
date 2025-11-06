import React, { createContext } from "react";
import { useState, useEffect } from "react";
export const storeContext = createContext();

function Store({ children }) {
  const [food, setFoods] = useState([]);

  useEffect(() => {
    const fetchApi = () => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => setFoods(data.recipes))
        .catch((error) => console.error(error));
    };

    fetchApi();
  }, []);

  return <storeContext.Provider value={food}>{children}</storeContext.Provider>;
}

export default Store;
