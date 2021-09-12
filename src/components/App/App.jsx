import { Component } from "react";
import { Section } from "../Section/Section";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions ";
import { Statistics } from "../Satistics/Satistics";
import { Notification } from "../Notification/Notification";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  leaveFeedback = (item) => {
    this.setState((prevState) => ({
      [item]: prevState[item] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let i = 0; i < Object.values(this.state).length; i += 1) {
      total += Object.values(this.state)[i];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    const percentage = (this.state.good / totalFeedback) * 100;
    return percentage.toFixed(2);
  };

  render() {
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please, leave feedback" />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.leaveFeedback}
        />
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}
