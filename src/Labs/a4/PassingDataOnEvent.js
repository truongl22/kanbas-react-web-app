const PassingDataOnEvent = () => {
  const add = (a, b) => {
    alert(`${a} + ${b} = ${a + b}`);
  };


  return (
    <div>
      <h1>
        Passing Data on Event
      </h1>
      <button onClick={() => add(4, 5)} className="btn btn-primary">
        Pass 2 and 3 to add()
      </button>
    </div>
  )
}

export default PassingDataOnEvent;