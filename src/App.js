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

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currDate = new Date("2027-06-21");
  return (
    <div>
      <div>
        <button
          onClick={() => {
            if (step > 1) setStep((s) => s - 1);
          }}
        >
          -
        </button>
        Step: {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
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
