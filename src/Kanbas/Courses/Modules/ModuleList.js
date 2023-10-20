import React from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css"

function ModuleList() {
  const {courseId} = useParams();
  const modules = db.modules;
  return (
    <div>
      <ul className="list-group">
        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <div key={index}>
                <li key={index} className="list-group-item p-2 ps-4" style={{backgroundColor: 'lightgray'}}>
                  <h3>{module.name}</h3>
                </li>
                <li className="wd-course-green-border list-group-item ps-5">
                  <h5>{module.description}</h5>
                </li>
              </div>
            ))
        }
      </ul>
    </div>
  );
}

export default ModuleList;