import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import "./index.css"
import {CgProfile} from "react-icons/cg"
import {TfiDashboard} from "react-icons/tfi"
import {BiBook} from "react-icons/bi"
import {BsCalendarWeek} from "react-icons/bs"
import {AiOutlineInbox} from "react-icons/ai"
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsCollectionPlay} from "react-icons/bs"
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineQuestionCircle} from "react-icons/ai"
import {BsArrowReturnLeft} from "react-icons/bs"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const mapIcon = {
    Account: <CgProfile className={"fs-3"}></CgProfile>,
    Dashboard: <TfiDashboard className={"fs-3"}></TfiDashboard>,
    Courses: <BiBook className={"fs-3"}></BiBook>,
    Calendar: <BsCalendarWeek className={"fs-3"}></BsCalendarWeek>,
    Inbox: <AiOutlineInbox className={"fs-3"}></AiOutlineInbox>,
    History: <AiOutlineClockCircle className={"fs-3"}></AiOutlineClockCircle>,
    Studio: <BsCollectionPlay className={"fs-3"}></BsCollectionPlay>,
    Commons: <AiOutlineArrowRight className={"fs-3"}></AiOutlineArrowRight>,
    Help: <AiOutlineQuestionCircle className={"fs-3"}></AiOutlineQuestionCircle>

  }
  const {pathname} = useLocation();
  return (
    // <div className={"wd-sidebar "}>
    <div className={"wd-kanbas-navigation"}>
      <div className="wd-northeastern-logo text-center p-3">
        <img src="../../images/NU_logo1.png" height="50px"/>
      </div>
      <div className="wd-kanbas-navigation-mid-section list-group" style={{width: 100}}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item text-center pb-1 ${pathname.includes(link) && "active"}`}>
            {mapIcon[link]}
            <br/>
            {link}
          </Link>
        ))}
      </div>
      {/*<div>*/}
      {/*  <BsArrowReturnLeft className={"wd-kanbas-navigation-end-section fs-3"}></BsArrowReturnLeft>*/}
      {/*</div>*/}
    </div>
    // </div>
  );
}

export default KanbasNavigation;
