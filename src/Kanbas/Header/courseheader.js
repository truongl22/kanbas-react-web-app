import "./index.css"

function CourseHeader({title, pages}) {
  return (
    <div>
      <div className="wd-header">
        <nav style={{"--bs-breadcrumb-divider": "'>'"}} aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a className="wd-header-font fs-5">{title}</a></li>
            <li className="breadcrumb-item active fs-5 " aria-current="page">{pages}</li>
          </ol>
        </nav>
      </div>
      <hr/>
    </div>
  )
}

export default CourseHeader;