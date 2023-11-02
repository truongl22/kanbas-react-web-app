import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayIndexAndLength from "../a3/ArrayIndexAndLength";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div>
      <h1>Lab4</h1>
      <Add a={1} b={2}></Add>
      <ClickEvent></ClickEvent>
      <PassingDataOnEvent></PassingDataOnEvent>
      <PassingFunctions theFunction={sayHello}/>
      <EventObject></EventObject>
      <Counter></Counter>
      <BooleanStateVariables></BooleanStateVariables>
      <StringStateVariables></StringStateVariables>
      <DateStateVariable></DateStateVariable>
      <ObjectStateVariable></ObjectStateVariable>
      <ArrayStateVariable></ArrayStateVariable>
      <ReduxExamples></ReduxExamples>
    </div>
  )
}

export default Assignment4