import { Component } from "react";
import DisplayPic from "./DisplayPic.component";
export default class Employee extends Component {
  constructor(props) {
    super();
    this.fName = props.fName;
    this.lName = props.lName;
    this.date = new Date(props.date);
    this.pic = props.pic;
  }
  render() {
    return (
      <div>
        <h1>First Name:{this.fName}</h1>
        <h1>Last Name:{this.lName}</h1>
        <h1>Date Of Birth:{this.date.toString()}</h1>
        <DisplayPic pic={this.pic} />
      </div>
    );
  }
}
