import ModuleList from "../Modules/ModuleList";
import ButtonRight from "./ButtonRight";
import ButtonTop from "./ButtonTop";

function Home() {
  return (
    <div className={"row"}>
      <div className={"col-xxl-9 col-xl-10"}>
        <div className={"row"}>
          <ButtonTop></ButtonTop>
        </div>
        <div>
          <hr/>
        </div>
        <div className={"row"}>
          <h2>Home</h2>
          <ModuleList/>
          <h2>Status</h2>
        </div>
      </div>
      <div className={"col-xxl-3 d-none d-xxl-block"}>
        <ButtonRight></ButtonRight>
      </div>
    </div>
  );
}

export default Home;