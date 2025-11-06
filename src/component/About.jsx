import React, { useState, useEffect } from "react";
import Container from "./container";

function About() {
  const [food, setFood] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/1")
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="about-page  bg-light mx-auto my-4 p-4 rounded shadow w-50">
      <div className="modify">
        {food && (
          <img
            src={food.image}
            alt="recipe"
            className="img-fluid rounded"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        )}
      </div>

      <Container />
    </div>
  );
}

export default About;
