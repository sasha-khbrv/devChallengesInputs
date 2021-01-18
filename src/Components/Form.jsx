import React from 'react';
import TextInput from './TextInput/TextInput';
import * as Yup from "yup";
import { Formik } from 'formik';

const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: ""
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
        </form>
      </Formik>
    </>
  );
};

export default Form;
