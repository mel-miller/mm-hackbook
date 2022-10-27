import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button type='button' className={['storybook-button', mode].join(' ')} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
};
