import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
// import db from "./Database";
import {useState, useEffect} from "react";
import store from "./store";
import {Provider} from "react-redux";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    if (response.data) {
      setCourses([...courses, response.data]);
    }
    setCourse(course);
  };
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  const [course, setCourse] = useState({
    name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });


  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const deleteCourse = async (course) => {
  //   try {
  //     await axios.delete(`${URL}/${course.id}`);
  //     setCourses(courses.filter((c) => c._id !== course._id));
  //   } catch (error) {
  //     console.error("Error deleting the course:", error);
  //     // Handle the error, show a notification, etc.
  //   }
  // };

  const deleteCourse = async (course_id) => {
    const response = await axios.delete(`${URL}/${course_id}`);
    setCourses(courses.filter((c) => c._id !== course_id));
  };


  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  const updateCourse = async (course) => {
    // setCourse({ ...course, name: course.name, number: course.number });
    console.log(course);
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({name: ""});
  };


  return (
    <Provider store={store}>

      <div className="d-flex flex-row">
        <div className="wd-col-left">
          <KanbasNavigation/>
        </div>
        <div className="wd-col-right">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard"/>}/>
            <Route path="Account" element={<h1>Account</h1>}/>
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>}/>
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>
          </Routes>
        </div>
      </div>
    </Provider>


  );
}

export default Kanbas;