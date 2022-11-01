import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, label, disabled, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button type='button' className={['storybook-button', mode].join(' ')} disabled={disabled} {...props}>
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
   * Button label
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Is this button disabled?
   */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  onClick: undefined,
  disabled: false,
};
