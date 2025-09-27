import React from "react";

function StudentCard({ name, rollNo, course, batch }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><strong>Roll No:</strong> {rollNo}</p>
          <p className="card-text"><strong>Course:</strong> {course}</p>
          <p className="card-text"><strong>Batch:</strong> {batch}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;