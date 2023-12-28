import './App.css';

import { useEffect, useState } from "react";
export default function App() {
  const [advice, setAdvide] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvide(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <div className="container">
      <div className="get-advice-box">
        <h1>{advice}</h1>
        <button className="btn" onClick={getAdvice}>Get Advice!</button>
        <Message count={count} />
      </div>
    </div>
  );
}

function Message(props) {
  return (
    <p>
      You have readed number <strong>{props.count}</strong> of advices
    </p>
  );
}
