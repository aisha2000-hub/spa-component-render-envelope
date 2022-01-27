import React from "react";
import "./envelopeStyle.css";

function Envelope({ toPerson, addressLabel1, fromPerson, addressLabel2 , stample}) {
  return (
    <div className="Envelope">
    <div className="Container-1">
      <h3 className="ToPerson">{toPerson}</h3>
      <h3>123 Fake St.</h3>
      <h3 className="Address1">{addressLabel1}</h3>
      </div>

      <div className = "Container-2" >
        <h3 className="FromPerson">{fromPerson}</h3>
        <h3>123 Fake St.</h3>
        <h3 className="Address2">{addressLabel2}</h3>
      </div>
      <img  className="Stample" src={stample} alt="stample"/>
    </div>
  );
}

export default Envelope;

