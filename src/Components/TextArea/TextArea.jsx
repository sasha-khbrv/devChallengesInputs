import React from 'react';
import { useField } from "formik";



const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div  className="inputContainer">
      <textarea className={`inpt txtArea ${meta.touched && meta.error ? "inptError": ''}`}
      {...field}
      {...props}></textarea>
      {meta.touched && meta.error ? (
        <span className="errorMsg">{meta.error}</span>
      ) : null}
        
    </div>
  );
};

export default TextArea;
