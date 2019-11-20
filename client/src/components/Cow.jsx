import React from "react";

let Cow = function(props) {
  let currentCow = props.cow
  return (
    <div>
      <h4>{currentCow.name}</h4>
      <p>{currentCow.description}</p>
    </div>
  );
};

export default Cow;
