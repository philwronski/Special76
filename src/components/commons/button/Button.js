import React from 'react';

const Button = (props) => (
  <button
    className="button"
    id={props.name}
    {...props}>
    {props.children}
  </button>
)

export default Button
