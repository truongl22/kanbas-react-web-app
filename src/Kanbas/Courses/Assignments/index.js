import React from "react";
import {Link, useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css"
import ButtonTop from "../Assignments/ButtonTop";


function Assignments() {
  const {courseId} = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className={"col-11"}>
      <div className={"row"}>
        <ButtonTop></ButtonTop>
      </div>
      <hr/>
      <br/>
      <ul className="list-group">
        <div className="list-group-item p-3 ps-4" style={{backgroundColor: 'lightgray'}}>
          <h4>Assignments for
            course {courseId}
          </h4>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item wd-course-green-border p-3">
            {assignment.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;