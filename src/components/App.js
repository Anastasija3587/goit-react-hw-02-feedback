import React, { Component } from 'react';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section
          title="Please leave feedback"
          good={good}
          neutral={neutral}
          bad={bad}
          handleLeaveFeedback={this.handleLeaveFeedback}
          options={{ good, neutral, bad }}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default App;
