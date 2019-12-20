import React from 'react';
import PropTypes from 'prop-types';

const Example = ({ title }) => (
  <div class="container">
    <h1>{ title }</h1>
  </div>
);

Example.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Example;
