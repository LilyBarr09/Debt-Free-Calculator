import React from "react";

class PaymentPlanInfo extends React.Component {
  render() {
    const { minPayment, numOfPayments } = this.props;
    const headerData = [
      { label: "Minimum Payment Due:", data: minPayment, char: "$" },
      { label: "Number of Payments:", data: numOfPayments, char: "#" },
    ];
    return (
      <div>
        <div>
          <h4>Payment Plan Information</h4>
          {headerData.map((item) => (
            <>
              <h4>{item.label}</h4>
              <h3>
                {item.char}
                {item.data}
              </h3>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default PaymentPlanInfo;
