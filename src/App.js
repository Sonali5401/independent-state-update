import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <ChildComponent />
      <ChildComponent />
      <ChildComponent />
    </div>
  );
}

const ChildComponent = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  return <button onClick={handleClick}>{counter}</button>;
};
