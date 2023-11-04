import "./index.css";
import {FaEllipsisV} from "react-icons/fa"
import {AiOutlinePlus} from "react-icons/ai"

function ButtonTop() {
  return (
    <div>
      <div>
        <button type="button" className=" wd-ellipsis-button btn-secondary float-end  ms-1">
          <FaEllipsisV className={"text-dark"}></FaEllipsisV>
        </button>
        <button type="button" className="btn-danger float-end wd-red-button ms-1">
          <AiOutlinePlus className={"mb-1 me-1"}></AiOutlinePlus>
          Assignment
        </button>
        <button type="button" className="btn-secondary float-end wd-130px-button ms-1">Group</button>
      </div>
    </div>
  )
}

export default ButtonTop