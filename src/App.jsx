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
    paymentHistory: [
      {
        payment: 0,
        newBalance: 0,
      },
    ],
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.calculateMinimumLoanPayment());
  };

  calculateInterest = () => {
    const { interestRate, balance } = this.state;
    let interestToDecimal = +interestRate / 100;
    let monthlyInterest = (interestToDecimal / 12) * +balance;
    this.setState({ interestAmount: monthlyInterest });
  };

  calculateMinimumLoanPayment = () => {
    const { balance, interestAmount } = this.state;
    let principal = +balance * 0.01;
    let minPayment = (principal + +interestAmount).toFixed(2);
    this.setState({ minimumLoanPayment: minPayment });
    this.calculateInterest();
    this.howManyPayments();
  };

  howManyPayments = () => {
    const { balance, minimumLoanPayment } = this.state;
    let debtFree = (+balance / +minimumLoanPayment).toFixed(0);
    this.setState({ numberOfPayments: +debtFree });
  };

  submitPayment = () => {
    const { balance, interestAmount, paymentHistory } = this.state;
    const { payment } = paymentHistory;
    +payment.push(+payment);
    let applyToBalance = +payment - +interestAmount;
    let runningBalance = (+balance - applyToBalance).toFixed(2);
    // if (runningBalance <= 100) {
    //   this.minimumLoanPayment = paymentHistory.newBalance + +interestAmount;
    // }
    this.setState({ payment: applyToBalance, newBalance: +runningBalance });
  };

  // resetState = () => {
  //   this.setState({
  //     balance: 0,
  //     interestRate: 0,
  //     interestAmount: 0,
  //     minimumLoanPayment: 0,
  //     payment: 0,
  //     numberOfPayments: "",
  //     paymentHistory: [],
  //   });
  // };

  render() {
    const inputsData = [
      {
        name: "balance",
        label: "Loan Amount",
        placeholder: "50000",
      },
      {
        name: "interestRate",
        label: "Interest Rate",
        placeholder: "2.5",
      },
      {
        name: "payment",
        label: "Payment Amount",
        placeholder: "Enter Amount",
        value: this.state.paymentHistory.payment,
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
                      placeholder={placeholder}
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
