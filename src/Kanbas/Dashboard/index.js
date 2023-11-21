import {Link} from "react-router-dom";
import db from "../Database";
import "./index.css"
import Card from "./card";
import Header from "../Header";
import React, {useState} from "react";
import {setModule} from "../Courses/Modules/modulesReducer";

function Dashboard({
                     courses, course, setCourse, addNewCourse,
                     deleteCourse, updateCourse
                   }
) {
  return (
    <div className="container-fluid">

      <h4>Course</h4>
      <div className="mb-3">
        <label className="form-label">New Course</label>
        <input value={course.name} className="form-control"
               onChange={(e) => setCourse({...course, name: e.target.value})}/>
      </div>
      <div className="mb-3">
        <label className="form-label">New Number</label>
        <input value={course.number} className="form-control"
               onChange={(e) => setCourse({...course, number: e.target.value})}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input value={course.startDate} className="form-control" type="date"
               onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
      </div>

      <button className={"btn btn-success me-1 mt-2"} onClick={addNewCourse}>
        Add
      </button>
      <button className={"btn btn-primary mt-2"} onClick={() => updateCourse(course)}>
        Update
      </button>

      <Header title={"Dashboard"}></Header>

      {/*<button onClick={addNewCourse}>*/}
      {/*  Add3*/}
      {/*</button>*/}

      <div className="list-group">
        <div className="wd-card-width row row-cols-1 row-cols-md-4 g-5">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
              <div><h5>{course._id.$oid}</h5></div>
              <button className={"btn btn-danger me-1"}
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                Delete
              </button>
              <button className={"btn btn-warning"}
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                Edit
              </button>
              {/*<button onClick={updateCourse}>*/}
              {/*  Update*/}
              {/*</button>*/}
              <Card name={course.name} number={course.number}></Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;