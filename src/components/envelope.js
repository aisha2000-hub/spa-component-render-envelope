import React from "react";
import "./envelopeStyle.css";

function Envelope({fromPerson , addressLabel1, stadt1,toPerson , addressLabel2,stadt2 , stample}) {
  return (
    <div className="Envelope">
    <div className="Container-1">
      <h3 className="fromPerson">{fromPerson}</h3>
      <h3>{stadt1}</h3>
      <h3 className="Address1">{addressLabel1}</h3>
      </div>

      <div className = "Container-2" >
        <h3 className="toPerson">{toPerson}</h3>
        <h3>{stadt2}</h3>
        <h3 className="Address2">{addressLabel2}</h3>
      </div>
      <img  className="Stample" src={stample} alt="stample"/>
    </div>
  );
}

export default Envelope;

