import React from "react";
import sectionimage from "./image-interactive.jpg";
function Section1() {
  return (
    <div className="section-container">
      <div className="wrapper">
        <div className="left">
          <img src={sectionimage} className="leftimage" />
        </div>
        <div className="right">
          <h1>The leader in interactive VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Section1;
