import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

const Section = ({
  title,
  handleLeaveFeedback,
  options,
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleLeaveFeedback}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  handleLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({}).isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Section;
