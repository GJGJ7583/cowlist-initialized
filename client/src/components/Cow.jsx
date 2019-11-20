import React from "react";

let Cow = function(props) {
  let currentCow = props.currentCow;
  return (
    <div>
      <h4>{currentCow.name}</h4>
      <p>{currentCow.description}</p>
    </div>
  );
};

export default Cow;
