import React, { useState, useEffect } from "react";
import Item from "./Item";

function Home() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setFood(data.recipes);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <div className="container ">
        <div className="row">
          {food.map((item) => {
            return (
              <div
                className="col-12 col-md-6 col-lg-4 col-xl-3 mx-4 my-3"
                key={item.id}
              >
                <Item
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  preptimes={item.preptimes}
                  disc={item.disc}
                ></Item>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
