import React from "react";

class PaymentHistory extends React.Component {
  render() {
    const { mainState } = this.props;
    return (
      <div>
        <div className="payment-history-container">
          <h3>Payment History</h3>
          {mainState.paymentHistory.map((history) => {
            const { payment, newBalance } = history;
            return (
              <ul>
                <li>Payment: {payment}</li>
                <li>Running Balance {newBalance}</li>
              </ul>
            );
          })}
          ;
        </div>
      </div>
    );
  }
}

export default PaymentHistory;
