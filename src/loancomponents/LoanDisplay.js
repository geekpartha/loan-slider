import React from "react";

class LoanDisplay extends React.Component {
  render() {
    const {
      principal,
      loanInterest,
      monthlyAmount,
      numMonths,
      dollar
    } = this.props.interestDisplay;
    return (
      <>
        <div>
          <p className="results">
            Amount:<b>{principal} {dollar}</b>
          </p>
          <p className="results">
            Monthly:<b>{monthlyAmount} {dollar}</b>
          </p>
          <p className="results">
            Time Period:<b>{numMonths} Months</b>
          </p>
          <p className="results">
            Rate of Interest: <b>{loanInterest}</b>
          </p>
        </div>
      </>
    );
  }
}

export default LoanDisplay;
