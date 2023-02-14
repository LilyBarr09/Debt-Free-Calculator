import React from "react";

class LoanDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <form>
            <h5>Loan Amount</h5>
            <input type="text" placeholder="$"></input>
            <h5>Loan Term In Years</h5>
            <input type="text"></input>
            <p>Or</p>
            <h5>Loan Term In Months</h5>
            <input type="text"></input>
            <h5>Interest Rate Per Year</h5>
            <input type="text" placeholder="%"></input>
          </form>
          <button class="btn-primary">Calculate</button>
        </div>
      </div>
    );
  }
}

export default LoanDetails;
