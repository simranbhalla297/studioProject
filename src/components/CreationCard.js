import React from "react";

export default function CreationCard(props) {
  console.log(props.details.imgUrl);
  return (
    <div
      className="card_container"
      style={{
        background: `url("${
          process.env.PUBLIC_URL + "/images/" + props.details.imgUrl
        }")`,
        backgroundRepeat: "no-repeat",
        width: "250px",
        height: "300px",
        color: "#fff",
      }}
    >
      <div className="text_bottom">
        <h1
          style={{
            marginTop: "80%",
            padding: "10px",

            bold: "800",
          }}
        >
          {props.details.heading}
        </h1>
      </div>
    </div>
  );
}
