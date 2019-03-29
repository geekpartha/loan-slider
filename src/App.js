import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./App.css";
import LoanDisplay from "./loancomponents/LoanDisplay";
import LoanText from "./loancomponents/LoanText";
import logo from "./logo.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: 500,
      numMonths: 6,
      dataShow: false };
  }
  componentDidUpdate(prevProps, prevState) {
    const { principal, numMonths } = this.state;
    if (
      prevState.principal !== this.state.principal ||
      prevState.numMonths !== this.state.numMonths
    ) {
      //Usually it is a bad practice to do HTTP requests in
      //the presentation Components in production ready app
      const API_URL = "https://ftl-frontend-test.herokuapp.com";
      return fetch(`${API_URL}/interest?amount=${principal}&numMonths=${numMonths}`)
        .then(response => response.json())
        .then(jsonData => {
          //jsonData is parsed json object received from url
          this.setState({
            loanInterest: jsonData.interestRate,
            monthlyAmount: jsonData.monthlyPayment.amount,
            dollar: jsonData.monthlyPayment.currency,
            nosPayments: jsonData.numPayments,
            dataShow: true
          });
          //console.log(this.state);
          return jsonData;
        });
    }
  }

  render() {
    const { principal, numMonths, dataShow } = this.state;
    return (
      <>
        <div className="container">
            <img src={logo} className="logo" alt="logo" />
            <div className="header">
              <p>Loan Calculator</p>
            </div>

          <div className="slider">
            <span className="slider-value">Loan Amount</span>
            <InputRange
              formatLabel={value => `${value}`}
              maxValue={5000}
              minValue={500}
              value={principal}
              onChange={principal => this.setState({ principal })}
              onChangeComplete={principal => this.setState({ principal })}
            />
          </div>
          <div className="slider">
            <span className="slider-value">Time Period</span>
            <InputRange
              maxValue={24}
              minValue={6}
              value={numMonths}
              onChange={numMonths => this.setState({ numMonths })}
            />
          </div>
          {/*Show our results as well as hide the instructions*/}
          {dataShow === true ? (
            <LoanDisplay interestDisplay={this.state} />
          ) : (
            <LoanText />
          )}
        </div>
      </>
    );
  }
}

export default App;
