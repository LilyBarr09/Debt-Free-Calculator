import React from "react";

class PaymentHistory extends React.Component {
  render() {
    const { mainState } = this.props;
    return (
      <div>
        <div className="payment-history-container">
          <h3>Payment History</h3>
          <p>
            Payment:
            {mainState.paymentHistory.map((payment) => (
              <p>${payment}</p>
            ))}
          </p>
          <h3>Running Balance: ${mainState.balance}</h3>
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
