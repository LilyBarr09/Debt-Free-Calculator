import "./App.css";
import LoanDetails from "./LoanDetails";

function App() {
  return (
    <div className="App">
      <header class="container">
        <h2>Debt-Free Calculator</h2>
        <div class="main-div">
          <LoanDetails />
        </div>
      </header>
    </div>
  );
}

export default App;
