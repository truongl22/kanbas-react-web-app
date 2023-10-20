import "./index.css"

function ButtonRight() {
  const buttons = ["Import Content", "Choose From Comm", "Choose Home Page", "View Course Str",
    "New Announcement", "New Analytics", "View Course Noti"]

  return (
    <div>
      {buttons.map((b, index) => (
        <button key={index} type="button" className="btn btn-secondary float-end wd-200px-button mt-1 ms-1 mb-1">
          {b}
        </button>
      ))}
    </div>
  )
}

export default ButtonRight