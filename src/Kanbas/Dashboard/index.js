import {Link} from "react-router-dom";
import db from "../Database";
import "./index.css"
import Card from "./card";
import Header from "../Header";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="container-fluid">
      <Header title={"Dashboard"}></Header>

      <div className="list-group">
        <div className="wd-card-width row row-cols-1 row-cols-md-4 g-5">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
              <Card name={course.name} number={course.number}></Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;