import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


function Kanbas() {
  return (

    <div className="d-flex flex-row">
      <div className="wd-col-left">
        <KanbasNavigation/>
      </div>
      <div className="wd-col-right">
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard"/>}/>
          <Route path="Account" element={<h1>Account</h1>}/>
          <Route path="Dashboard" element={<Dashboard/>}/>
          <Route path="Courses/:courseId/*" element={<Courses/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default Kanbas;