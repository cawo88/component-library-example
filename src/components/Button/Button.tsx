import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  type?: 'primitive' | 'simple' | 'rounded';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primitive UI component for user interaction
 */
const Button = ({ type = 'primitive', backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${type}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
