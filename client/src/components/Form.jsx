import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.getCowName = this.getCowName.bind(this)
    this.getCowDesciption= this.getCowDesciption.bind(this)
    this.callFunc= this.callFunc.bind(this)
  }

  getCowName(event) {
    //console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  getCowDesciption(event) {
    //console.log(event.target.value)
    this.setState({
      description: event.target.value
    })
  }

  
  callFunc()  {
    this.props.func({
      name: this.state.name,
      description: this.state.description
    });
  }

  render() {
    return (
      <div>
        <form>
          Name:
          <input type="text" onChange={this.getCowName}/><br/>
          Description:
          <input type="text" onChange={this.getCowDesciption}/><br/>
        </form><br/>
        <button type="submit" onClick={this.callFunc}>Add Cow</button>
      </div>
    );
  }
}
export default Form;
