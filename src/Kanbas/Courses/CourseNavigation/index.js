import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css"

function CourseNavigation() {
  const links = ["Home", "Piazza", "Meetings", "Modules", "Quizzes", "Assignments", "Grades",
    "Teams", "FACT", "Discussion", "Announcements", "Pages", "Files"];

  const {courseId} = useParams();
  const {pathname} = useLocation();
  return (

    <div className="list-group" style={{width: 150}}>
      <div className={"wd-course-nav mt-3"}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ps-2 ${pathname.includes(link) && "active"}`}>
            {link}
          </Link>
        ))}
      </div>
    </div>

  );
}


export default CourseNavigation;