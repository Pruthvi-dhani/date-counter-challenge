import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

function addDays(date, days) {
  const res = new Date(date);
  res.setDate(res.getDate() + days);
  return res;
}

function Slider({ step, onStepChange }) {
  return (
    <input
      type="range"
      min={0}
      max={10}
      step={1}
      value={step}
      onChange={(e) => onStepChange(+e.target.value)}
    ></input>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currDate = new Date("2027-06-21");
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <Slider step={step} onStepChange={setStep} /> <span> {step} </span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>Count:
        {count}
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>Today is {addDays(currDate, count).toDateString()}</p>
    </div>
  );
}
