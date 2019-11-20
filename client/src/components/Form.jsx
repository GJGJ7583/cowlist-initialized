import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  render() {
    return (
      <div>
        <form>
          Name:
          <input type="text" />
          Description:
          <input type="text" />
        </form>
        <button type="submit">Add Cow</button>
      </div>
    );
  }
}
export default Form;
