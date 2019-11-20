import React from "react";

let List = function(props) {
  let cowList = props.cowList;
  return (
    <div>
      <ul>
        {cowList.map(cow => {
          return <li>{cow.name}</li>;
        })}
      </ul>
    </div>
  );
};


export default List;
