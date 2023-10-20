import "./index.css"
import {FaEllipsisV} from "react-icons/fa"
import {AiOutlinePlus} from "react-icons/ai"

function ButtonTop() {
  return (
    <div>
      <div>
        <button type="button" className="btn btn-secondary float-end wd-ellipsis-button ms-1">
          <FaEllipsisV className={"text-dark"}></FaEllipsisV>
        </button>
        <button type="button" className="btn btn-danger float-end wd-red-button ms-1">
          <AiOutlinePlus className={"mb-1 me-1"}></AiOutlinePlus>
          Module
        </button>
        <button type="button" className="btn btn-secondary float-end wd-130px-button ms-1">
          <i className="fas fa-check-circle"></i>
          Publish All
        </button>
        <button type="button" className="btn btn-secondary float-end wd-130px-button ms-1">View Progress</button>
        <button type="button" className="btn btn-secondary float-end wd-130px-button ms-1">Collapse All</button>
      </div>
    </div>
  )
}

export default ButtonTop