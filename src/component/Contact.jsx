import React, { useContext } from "react";
import { storeContext } from "../Store/store";
import Container from "./container";

function Contact() {
  const foods = useContext(storeContext);
  console.log(foods);
  return (
    <div
      className="about-page bg-light mx-auto my-4 p-4 rounded shadow w-50"
      style={{ height: "200px" }} // fixed height in pixels
    >
      <div className="modify text-center">
        {foods?.[0]?.image && (
          <img
            src={foods[0].image}
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

export default Contact;
