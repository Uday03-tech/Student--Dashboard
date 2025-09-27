import React, { Component } from "react";
import StudentCard from "./StudentCard";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: "Aarav Mehta", rollNo: "101", course: "ReactJS", batch: "10-12 AM", style: "card-gradient-1" },
        { name: "Riya Sharma", rollNo: "102", course: "NodeJS", batch: "12-3 PM", style: "card-gradient-2" },
        { name: "Rohit Patil", rollNo: "103", course: "Bootstrap", batch: "2:30-4:30 PM", style: "card-gradient-3" },
        { name: "Neha Kulkarni", rollNo: "104", course: "JavaScript", batch: "5-6 PM", style: "card-gradient-4" },
        { name: "Siddharth Jain", rollNo: "105", course: "MongoDB", batch: "6-7 PM", style: "card-gradient-5" },
        { name: "Kavya Nair", rollNo: "106", course: "ExpressJS", batch: "7-8 PM", style: "card-gradient-6" },
      ],
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <h2 className="mb-4 text-center">Student Records</h2>
        <div className="row">
          {this.state.students.map((student, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <StudentCard {...student} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;
