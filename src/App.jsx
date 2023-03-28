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

  updateValues = (balance, interestRate) => {
    let principal = +balance * 0.01;
    let interest = (+interestRate / 1200) * +balance;
    let minPayment = +(principal + interest).toFixed(2);
    let numberOfPayments = this.howManyPayments(
      this.state.balance,
      this.state.minimumLoanPayment,
      this.state.interestAmount
    );
    return {
      minimumLoanPayment: +minPayment,
      interestAmount: +interest,
      numberOfPayments: +numberOfPayments,
    };
  };

  handleChange = ({ target: { name, value } }) => {
    let obj = { [name]: +value };
    if (name === "balance") {
      obj = {
        ...obj,
        ...this.updateValues(+value, this.state.interestRate),
      };
    } else if (name === "interestRate") {
      obj = {
        ...obj,
        ...this.updateValues(+value, this.state.balance),
      };
    }
    this.setState(obj);
  };

  calculateMinimumLoanPayment = () => {
    const { balance, interestRate } = this.state;
    let principal = +balance * 0.01;
    let interest = (+interestRate / 1200) * +balance;
    let minPayment = +(principal + interest).toFixed(2);
    let numberOfPayments = this.howManyPayments(
      this.state.balance,
      this.state.minimumLoanPayment,
      this.state.interestAmount
    );
    this.setState({
      minimumLoanPayment: +minPayment,
      interestAmount: +interest,
      numberOfPayments: +numberOfPayments,
    });
  };

  howManyPayments = (balance, minimumLoanPayment, interestAmount) => {
    let applyToBalance = +minimumLoanPayment - +interestAmount;
    return (+balance / applyToBalance).toFixed(0);
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

      this.setState({
        balance: +runningBalance,
        paymentHistory: [...paymentHistory, +payment],
      });
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
        value: this.state.balance,
      },
      {
        name: "interestRate",
        label: "Interest Rate",
        value: this.state.interestRate,
      },
      {
        name: "payment",
        label: "Make A Payment",
        value: this.state.payment,
      },
    ];

    const btnList = [
      { id: 1, label: "Submit", action: this.submitPayment },
      { id: 2, label: "Reset", action: this.resetState },
    ];

    const secondaryComponents = [
      <PaymentPlanInfo
        minPayment={this.state.minimumLoanPayment}
        numOfPayments={this.state.numberOfPayments}
      />,
      <PaymentHistory
        data={{ pH: this.state.paymentHistory, bal: this.state.balance }}
      />,
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
              <form>
                {inputsData.map((input) => {
                  const { name, label, placeholder, value } = input;
                  return (
                    <div key={name}>
                      <label>{label}</label>
                      <br />
                      <input
                        type="number"
                        name={name}
                        value={value && value}
                        onChange={this.handleChange}
                      />
                    </div>
                  );
                })}
              </form>

              {btnList.map((btn) => (
                <button
                  className="btn-primary"
                  onClick={btn.action}
                  key={btn.id}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {secondaryComponents.map((comp) => (
            <div className="main-div">{comp}</div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
