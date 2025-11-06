import React from "react";
import { Link } from "react-router-dom";

function Item({ id, image, name, preptimes, disc }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Link to={`/product/${id}`}>
        <img src={image} className="card-img-top" alt="food-image" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{preptimes}</p>
        <a href="#" className="btn btn-primary"></a>
      </div>
    </div>
  );
}

export default Item;
