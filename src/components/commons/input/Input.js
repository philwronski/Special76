import React from 'react';

const Input = (props) => (
  <div className="input">
    <label for={props.name} className="input__label">{props.title}</label>
    <input
      className="input__control"
      id={props.name}
      name={props.name}
      type={props.inputType}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      {...props} />
  </div>
)

export default Input
