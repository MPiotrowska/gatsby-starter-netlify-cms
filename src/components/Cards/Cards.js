import React from "react";
import Features from "../Features";
import "../all.sass";

export const Cards = (props) => {
  return (
    <>
      <Features gridItems={props.gridItems} />
      <div className="columns">
        <div className="column is-7">
          <h3 className="has-text-weight-semibold is-size-3">
            {props.heading}
          </h3>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};
