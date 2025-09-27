import React from "react";

const StudentCard = ({ name, rollNo, course, batch, style }) => {
  return (
    <div className={`card student-card ${style}`}>
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Roll No:</strong> {rollNo}</p>
        <p className="card-text"><strong>Course:</strong> {course}</p>
        <p className="card-text"><strong>Batch:</strong> {batch}</p>
      </div>
    </div>
  );
};

export default StudentCard;
