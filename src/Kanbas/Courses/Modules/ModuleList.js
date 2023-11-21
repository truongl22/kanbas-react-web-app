import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {useSelector, useDispatch} from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const {courseId} = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
      );
  }, [courseId]);

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


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
                    onClick={handleAddModule}>
              Add
            </button>
            <button className={"btn btn-primary"}
                    onClick={handleUpdateModule}>
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
                            onClick={() => handleDeleteModule(module._id)}>
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