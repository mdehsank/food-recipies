import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
[];

const ProductDetail = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        let item = data.recipes.filter((ele) => ele.id == id);
        console.log(item[0]);

        setFood(item[0]);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={food.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">Rating:{food.rating}</p>
        <p className="card-text">preprationTime:{food.prepTimeMinutes}</p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
  );
};

export default ProductDetail;
