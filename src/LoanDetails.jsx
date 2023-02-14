import React from "react";

class LoanDetails extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <h5>Loan Amount</h5>
          <div class="input-field"></div>
          <h5>Loan terms in years</h5>
          <div class="input-field"></div>
          <h5>Or</h5>
          <h5>Loan term in months</h5>
          <div class="input-field"></div>
          <h5>Interest rate per year</h5>
          <div class="input-field"></div>
          <button class="btn-primary">Calculate</button>
        </div>
      </div>
    );
  }
}

export default LoanDetails;
