import React from "react";

class PaymentPlanInfo extends React.Component {
  render() {
    const { mainState } = this.props;
    return (
      <div>
        <div>
          <h4>Payment Plan Information</h4>

          <h4>Minimum Payment Due:</h4>
          <h3>${mainState.minimumLoanPayment}</h3>

          <h4>Number of Payments</h4>
          <h3>#{mainState.numberOfPayments}</h3>
        </div>
      </div>
    );
  }
}

export default PaymentPlanInfo;
