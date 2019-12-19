import React from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic';
import Notification from '../Notification/Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <section>
      <h2>Statistics</h2>
      {countTotalFeedback > 0 ? (
        <>
          <Statistic label="Good" value={good} />
          <Statistic label="Neutral" value={neutral} />
          <Statistic label="Bad" value={bad} />
          <Statistic label="Total" value={countTotalFeedback} />
          <Statistic
            label="Positive Feedback"
            value={`${countPositiveFeedbackPercentage}%`}
          />
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
