import React from "react";

class LoanDisplay extends React.Component {
  render() {
    const {
      loanInterest,
      monthlyAmount,
      dollar,
      numMonths,
      nosPayments,
      principal
    } = this.props.interestDisplay;
    return (
      <>
        <div>
          <p className="results">
            Amount:<b>{principal} </b>
          </p>
          <p className="results">
            Monthly:<b>{monthlyAmount} {dollar}</b>
          </p>
          <p className="results">
            Loan Tenture:<b>{numMonths} Months</b>
          </p>
          <p className="results">
            Rate of Interest: <b>{loanInterest}</b>
          </p>
          <p className="results">
            Number of Payments: <b>{nosPayments}</b>
          </p>
        </div>
      </>
    );
  }
}

export default LoanDisplay;
