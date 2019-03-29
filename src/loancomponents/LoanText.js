import React from "react";

class LoanText extends React.Component {
  render() {
    return (
      <div>
        <div className="header" />
        <h3 className="instructions">Instructions</h3>
        <p className="instructions-details">
          Use the slider as per your requirement. Loan amount is in USD and Time period is in months
        </p>
      </div>
    );
  }
}

export default LoanText;
