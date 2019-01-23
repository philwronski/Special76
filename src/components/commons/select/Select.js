import React from 'react'

const Select = (props) => (
  <div className="select">
    <label htmlFor={props.name} className="field__label">{props.title}</label>
    <select
      className="select__control"
      id={props.name}
      {...props}>
      <option value="">{props.placeholder}</option>
      {props.options.map(option =>
        <option key={option.value} value={option.value}>{option.label}</option>
      )}
    </select>
  </div>
)

export default Select
