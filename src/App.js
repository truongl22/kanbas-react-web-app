import logo from './logo.svg';
import './App.css';
import Labs from "./Labs"
import HellloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Labs"/>}/>
        <Route path="/hello" element={<HellloWorld/>}/>
        <Route path="/Labs/*" element={<Labs/>}/>
        <Route path="/Kanbas/*" element={<Kanbas/>}/>
        <Route path="/project/*" element={<Project/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
