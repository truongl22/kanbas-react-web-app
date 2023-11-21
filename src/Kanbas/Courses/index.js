import db from "../../Kanbas/Database";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import {useState, useEffect} from "react";
import axios from "axios";
import CourseHeader from "../Header/courseheader";

function Courses() {
  const {courseId} = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <div>
        <CourseHeader title={course.name} pages={"Home"}></CourseHeader>
      </div>
      <div>
        <div className={"col-2 d-none d-lg-block"}>
          <CourseNavigation/>
        </div>
        <div>
          <div
            className="overflow-y-scroll position-fixed bottom-0 end-0 "
            style={{
              left: "320px",
              top: "100px",
            }}>
            <Routes>
              <Route path="/" element={<Navigate to="Home"/>}/>
              <Route path="Home" element={<Home/>}/>
              <Route path="Modules" element={<Modules/>}/>
              <Route path="Assignments" element={<Assignments/>}/>
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}/>
              />
              <Route path="Grades" element={<h1>Grades</h1>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;