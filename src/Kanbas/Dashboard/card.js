import "./index.css"
import {BsFillBookmarkFill} from "react-icons/bs"

function Card({name, number}) {
  return (
    <div className="col wd-card-width">
      <div className="card h-100 ">
        <img src="../../images/blue-background.png" className="card-img-top" alt="..."/>
        <div className="card-body pt-3">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{number}</p>
          <BsFillBookmarkFill className={"fs-5"}></BsFillBookmarkFill>
        </div>
      </div>
    </div>
  )
}


// <div class="card mb-4">
//   <img src="../../images/blue-background.png" class="card-img-top" alt="...">
//     <div class="card-body pt-3">
//       <h6 class="card-title">CS4550 12631 Web Development</h6>
//       <p class="card-text card-title-color card-title-font14 mb-0">CS4550.12631.202410</p>
//       <p class="card-text card-title-color card-title-font10 mb-1">202410_1 Fall 2023 Semester Full Term</p>
//       <a href="#"><i class="fas fa-bookmark" style="color: rgb(128,128,128)"></i></a>
//     </div>
// </div>
export default Card