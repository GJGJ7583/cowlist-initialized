import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import Form from "./components/Form";
import Cow from "./components/Cow";
import Axios from "axios";

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

  componentDidMount(){
    this.getCowList()
    .catch(err => console.log(err))
    .then((listOfCows) => {
      this.setState({
        cowList: listOfCows.data
      })
    })
    .catch(err => console.log(err))
  }

  updateCowList(cow){
    this.addCow(cow)
    .then(() => {return this.getCowList()})
    .then((listCows) => {
      this.setState({
        cowList: listCows.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  addCow(cow){
    //console.log(cow)
    return Axios.post('/cows', cow).catch(err => console.log(err))
  } 

  getCowList(){
    return Axios.get('/cows').catch(err => console.log(err))
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
