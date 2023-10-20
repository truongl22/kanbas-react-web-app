import ModuleList from "./ModuleList";
import ButtonTop from "../Home/ButtonTop";

function Modules() {
  return (
    <div className={"col-11"}>
      <div className={"row mb-3"}>
        <ButtonTop></ButtonTop>
      </div>
      <div className={"row mb-3"}>
        <hr/>
      </div>
      <div className={"row"}>
        <ModuleList/>
      </div>
    </div>
  );
}

export default Modules;
