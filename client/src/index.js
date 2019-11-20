import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import Form from "./components/Form";
import Cow from "./components/Cow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [{
        name: "Emily",
        decription: "Fat cow"
      }],
      currentCow: {}
    };
  }
  render() {
    return (
      <div>
        <h2>Cow List</h2>
        <Form />
        <List cowList={this.state.cowList} />
        <Cow cow={this.state.currentCow} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
