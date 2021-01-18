import React from 'react';
import { useField } from "formik";

const SIZE = [
  'inpt--size--sm', 'inpt--size--md'
]

const TextInput = ({ label, ...props }) => {

  const setInptSize = SIZE.includes(props.size) ? props.size : 'inpt--size--md';

  const [field, meta] = useField(props);
  return (
    <div className="inputContainer">
      <label className='inputLabel' htmlFor={props.id}>
        {label}
        <input className={`inpt ${meta.touched && meta.error ? "inptError": ''} ${setInptSize} ${props.startIcon || ''} ${props.endIcon || ''} ${props.width || ''}`}
        {...field}
        {...props} />
      </label>
      {meta.touched && meta.error ? (
        <span className="errorMsg">{meta.error}</span>
      ) : null}
    </div>
  );
};

export default TextInput;
