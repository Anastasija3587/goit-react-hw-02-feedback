import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
        <button
          type="button"
          name={option}
          key={shortid.generate()}
          onClick={onLeaveFeedback}
          className={styled.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({}).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
