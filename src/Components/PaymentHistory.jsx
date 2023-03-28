import React from "react";

class PaymentHistory extends React.Component {
  render() {
    const { pH, bal } = this.props.data;
    return (
      <div>
        <div className="payment-history-container">
          <h3>Payment History</h3>
          <div>
            Payment:
            {pH.map((payment) => (
              <p key={payment}>${payment}</p>
            ))}
          </div>
          <h3>Running Balance: ${bal}</h3>
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
