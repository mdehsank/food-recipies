import React, { useContext } from "react";
import { storeContext } from "../Store/store";
import Container from "./container";

function Trainding() {
  const items = useContext(storeContext);
  console.log(items.recipes);

  return (
    <div className="about-page  bg-light mx-auto my-4 p-4 rounded shadow w-50-">
      <div className="modify">
        {items?.[0]?.image && (
          <img
            src={items[0].image}
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

export default Trainding;
