import React from "react";
import { Button } from "react-bootstrap";
import CreationData from "./CreationData";
import CreationCard from "./CreationCard";
function Section2() {
  console.log(CreationData);
  return (
    <div className="section2-container">
      <div className="text-container">
        <div className="text">
          <h1>OUR CREATIONS</h1>
        </div>
      </div>
      <div className="cards ">
        {CreationData.map((data) => {
          return <CreationCard details={data} />;
        })}
      </div>
    </div>
  );
}

export default Section2;
