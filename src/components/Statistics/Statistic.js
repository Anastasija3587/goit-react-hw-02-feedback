import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({ label, value }) => {
  return (
    <>
      <p>
        {label} {value}
      </p>
    </>
  );
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Statistic;
