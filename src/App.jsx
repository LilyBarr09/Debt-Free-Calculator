import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LoanDetails from "./LoanDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoanDetails />
    </div>
  );
}

export default App;
