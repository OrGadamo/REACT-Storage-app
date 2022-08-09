import { Component } from "react";
import Employee from "./Employee.component";
export default class Employees extends Component {
  render() {
    let employees = [
      { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "user.png" },
      { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "user.png" },
      { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "user.png" },
      { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "user.png" },
      { fName: "Or", lName: "Gadamo", date: "11/16/1998", pic: "user.png" },
    ];
    return (
      <div>
        {employees.map((employee) => {
          return (
            <Employee
              fName={employee.fName}
              lName={employee.lName}
              date={employee.date}
              pic={employee.pic}
            />
          );
        })}
      </div>
    );
  }
}
