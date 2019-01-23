import React from 'react';

const TextArea = (props) => (
  <div className="text-area">
    <label htmlFor={props.name} className="field__label">{props.title}</label>
    <textarea
      className="text-area__control"
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}/>
  </div>
)

export default TextArea
