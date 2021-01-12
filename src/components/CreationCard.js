import React from "react";

export default function CreationCard(props) {
  return (
    <div
      className="card_container"
      style={{
        backgroundImage: `url("${require("../images/" + props.details.imgUrl + "')})`,
        backgroundRepeat: "no-repeat",
        width: "250px",
        height: "250px",
      }}
    >
      <h1>{props.details.heading}</h1>
    </div>
  );
}
