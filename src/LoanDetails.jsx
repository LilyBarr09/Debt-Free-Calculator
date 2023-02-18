import React from "react";

class LoanDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      loanAmount: 0,
      interestRate: 0,
      paymentAmount: 0,
      // paymentHistory: [],
      // minimumPayment: 0,
      // interestOnPayment: 0,
      // principalOnPayment: 0,
      // numberOfPayments: 0,
    };
  }

  updateState = (e) => {
    this.setState({
      loanAmount: e.target.value,
      interestRate: e.target.value,
      paymentHistory: e.target.value,
      paymentAmount: e.target.value,
    });
  };

  render() {
    const inputsData = [
      {
        label: "Loan Amount",
        placeholder: "5000 = $5,000",
      },
      {
        label: "Interest Rate",
        placeholder: "2.5 = 2.5%",
      },
      {
        label: "Payment Amount",
        placeholder: "350.25 = $350.25",
      },
    ];
    return (
      <div class="container">
        <div>
          <h3>Loan Details</h3>
          {inputsData.map((input) => {
            const { label, placeholder, button } = input;
            return (
              <form>
                <label>{label}</label>
                <br />
                <input
                  type="number"
                  placeholder={placeholder}
                  onChange={this.updateState}
                />
              </form>
            );
          })}
          <button class="btn-primary">Submit</button>
        </div>

        <div>
          <h3>Payment Plan Information</h3>
          <div>1% Minimum Principal Required</div>
          <div>Minimum Payment Due:</div>
          <div>Interest:</div>
          <div>Principal:</div>
          <div>payments to be debt free!</div>
        </div>

        <div>
          <h3>Payment History</h3>
        </div>
      </div>
    );
  }
}

export default LoanDetails;
