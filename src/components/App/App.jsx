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
  leaveFeedback = (event) => {
    event.preventDefault();
    Object.keys(this.state).map((item) => {
      if (item === event.target.name) {
        return this.setState({
          [event.target.name]: this.state[item] + 1,
        });
      }
    });
  };

  countTotalFeedback = () => {
    let total = 0;
    for (let i = 0; i < Object.values(this.state).length; i += 1) {
      total += Object.values(this.state)[i];
    }
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let total = 0;
    for (let i = 0; i < Object.values(this.state).length; i += 1) {
      total += Object.values(this.state)[i];
    }
    const percentage = (this.state.good / total) * 100;
    return percentage.toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please, leave feedback" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.leaveFeedback}
        />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}
