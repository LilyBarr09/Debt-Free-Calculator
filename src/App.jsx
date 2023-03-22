import "./App.css";
import React from "react";
import PaymentHistory from "./Components/PaymentHistory";
import PaymentPlanInfo from "./Components/PaymentPlanInfo";

class App extends React.Component {
  state = {
    balance: 0,
    interestRate: 0,
    interestAmount: 0,
    minimumLoanPayment: 0,
    numberOfPayments: "",
    payment: 0,
    paymentHistory: [],
  };
  baseState = this.state;

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.calculateMinimumLoanPayment());
  };

  calculateMinimumLoanPayment = () => {
    const { balance, interestRate } = this.state;
    let principal = +balance * 0.01;
    let interest = (+interestRate / 1200) * +balance;
    let minPayment = (principal + interest).toFixed(2);
    this.setState({
      minimumLoanPayment: +minPayment,
      interestAmount: +interest,
    });
    this.howManyPayments();
  };

  howManyPayments = () => {
    const { balance, minimumLoanPayment, interestAmount } = this.state;
    let applyToBalance = +minimumLoanPayment - +interestAmount;
    let debtFree = (+balance / applyToBalance).toFixed(0);
    this.setState({ numberOfPayments: +debtFree });
  };

  submitPayment = (e) => {
    e.preventDefault();
    const {
      balance,
      interestAmount,
      paymentHistory,
      payment,
      minimumLoanPayment,
    } = this.state;
    if (
      +payment >= +minimumLoanPayment &&
      +payment > 0 &&
      (+payment <= +balance + +interestAmount || +payment <= +balance)
    ) {
      let applyToBalance = +payment - +interestAmount;
      let runningBalance = (+balance - applyToBalance).toFixed(2);
      this.setState(
        {
          balance: +runningBalance,
          paymentHistory: [...paymentHistory, +payment],
        },
        () => this.calculateMinimumLoanPayment()
      );
    } else {
      alert(
        "Payment is less than the 1% minimum required or more than the balance due."
      );
    }
  };

  resetState = () => {
    this.setState(this.baseState);
  };

  render() {
    const inputsData = [
      {
        name: "balance",
        label: "Loan Amount",
        // placeholder: "Enter Amount",
        value: this.state.balance,
      },
      {
        name: "interestRate",
        label: "Interest Rate",
        // placeholder: "Enter Interest Rate",
        value: this.state.interestRate,
      },
      {
        name: "payment",
        label: "Payment Amount",
        // placeholder: "Enter Payment Amount",
        value: this.state.payment,
      },
    ];
    return (
      <div className="App">
        <div className="calculator-title">
          <h2>Debt Free Calculator</h2>
        </div>

        <header className="container">
          <div className="main-div">
            <div>
              <h3>Enter Loan Details</h3>
              {inputsData.map((input) => {
                const { name, label, placeholder, value } = input;
                return (
                  <form>
                    <label>{label}</label>

                    <br />

                    <input
                      type="number"
                      name={name}
                      // placeholder={placeholder}
                      value={value && value}
                      onChange={this.handleChange}
                    />
                  </form>
                );
              })}

              <button className="btn-primary" onClick={this.submitPayment}>
                Submit
              </button>

              <br></br>

              <button className="btn-primary" onClick={this.resetState}>
                Reset
              </button>
            </div>
          </div>

          <div className="main-div">
            <PaymentPlanInfo mainState={this.state} />
          </div>
          <div className="main-div">
            <PaymentHistory mainState={this.state} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
