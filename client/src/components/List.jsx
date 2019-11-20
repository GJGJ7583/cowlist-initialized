import React from "react";

let List = function(props) {
  let cowList = props.cowList;
  return (
    <div>
      <ul>
        {cowList.map(cow => {
          return <li onClick={() => {props.displayCow(cow)}}>{cow.name}</li>;
        })}
      </ul>
    </div>
  );
};


export default List;
