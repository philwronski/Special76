import React from 'react';

const Input = (props) => (
  <div className="input">
    <label htmlFor={props.name} className="field__label">{props.title}</label>
    <input
      className="input__control"
      id={props.name}
      name={props.name}
      type={props.type}
      title={props.title}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}/>
  </div>
)

export default Input
