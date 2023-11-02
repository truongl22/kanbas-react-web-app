import React, {useState} from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {useSelector, useDispatch} from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const {courseId} = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <div class="mb-3">
            <label className="form-label">Title</label>
            <input className={"form-control mt-2 mb-2"}
                   value={module.name}
                   onChange={(e) =>
                     dispatch(setModule({...module, name: e.target.value}))
                   }/>
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className={"form-control"}
                      value={module.description}
                      onChange={(e) =>
                        dispatch(setModule({...module, description: e.target.value}))
                      }/>
          </div>

          <div className={"mt-2"}>
            <button className={"btn btn-success me-1"}
                    onClick={() => dispatch(addModule({...module, course: courseId}))}>
              Add
            </button>
            <button className={"btn btn-primary"}
                    onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </div>
        </li>

        {
          modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <div key={index}>
                <li key={index} className="d-flex list-group-item p-2 ps-4" style={{backgroundColor: 'lightgray'}}>
                  <h3>{module.name}</h3>
                  <div className={"ms-4"}>
                    <button className={"btn btn-warning me-1"}
                            onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button>
                    <button className={"btn btn-danger float-end"}
                            onClick={() => dispatch(deleteModule(module._id))}>
                      Delete
                    </button>
                  </div>

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