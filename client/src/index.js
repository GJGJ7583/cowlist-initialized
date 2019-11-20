import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import Form from "./components/Form";
import Cow from "./components/Cow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowList: [],
      currentCow: {}
    };
    this.updateCowList = this.updateCowList.bind(this)
    this.currentCowChangeState = this.currentCowChangeState.bind(this)
  }

  updateCowList(cow){
    let newCowList = this.state.cowList.slice();
    newCowList.push(cow);
    this.setState({
      cowList: newCowList
    })
  }

  currentCowChangeState(cow){
    this.setState({
      currentCow: cow
    })
  }

  render() {
    return (
      <div>
        <h2>Cow List</h2>
        <Form func={this.updateCowList}/>
        <List cowList={this.state.cowList} displayCow={this.currentCowChangeState}/>
        <Cow cow={this.state.currentCow} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
