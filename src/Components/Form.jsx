import React from 'react';
import TextInput from './TextInput/TextInput';
import * as Yup from "yup";
import { Formik } from 'formik';
import TextArea from './TextArea/TextArea';

const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstInput: "",
          secondInput: "",
          thirdInput: "",
          fourthInput: "",
          fifthInput: "",
          sixthInput: "",
          seventhInput: "",
          eighthInput: "",
          firstTxtArea: ""
        }}
        validationSchema={Yup.object({
          firstInput: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required field"),
          firstTxtArea: Yup.string()
            .max(170, 'Must be 170 characters or less')
            .required("Required field")
        })}
/*         onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500));
          setSubmitting(false);
        }} */
      >
        <form>
          <div className='row'>
            <div className='cell'>
              <p className='cell-title'>&lt;Input required/&gt;</p>
              <TextInput
                label="Label"
                id="firstInput"
                name="firstInput"
                type="text"
                placeholder="Placeholder"
                required                
              />
            </div>
          </div>

          <div className='row'>
            <div className='cell'>
              <p className='cell-title'>&lt;Input disabled /&gt;</p>
              <TextInput
                label="Label"
                id="secondInput"
                name="secondInput"
                type="text"
                placeholder="Placeholder"
                disabled                
              />
            </div>
          </div>

          <div className='row'>
            <div className='cell'>
              <p className='cell-title'>&lt;Input helperText="Some interesting text" /&gt;</p>
              <TextInput
                label="Label"
                id="thirdInput"
                name="thirdInput"
                type="text"
                placeholder="Placeholder"
                helperText="Some interesting text"
              />
            </div>
          </div>

          <div className='row'>
            <div className='cell'>
              <p className='cell-title'>&lt;Input startIcon="face" /&gt;</p>
              <TextInput
                label="Label"
                id="fourthInput"
                name="fourthInput"
                type="text"
                placeholder="Placeholder"
                startIcon="inpt--startIcon--personAdd"
              />
            </div>
            <div className='cell'>
              <p className='cell-title'>&lt;Input endIcon="face" /&gt;</p>
              <TextInput
                label="Label"
                id="fifthInput"
                name="fifthInput"
                type="text"
                placeholder="Placeholder"
                endIcon="inpt--endIcon--fingerPrint"
              />
            </div>
          </div>

          <div className='row'>
            <div className='cell'>
              <p className='cell-title'>&lt;Input size="inpt--size--sm" /&gt;</p>
              <TextInput
                label="Label"
                id="sixthInput"
                name="sixthInput"
                type="text"
                placeholder="Placeholder"
                size="inpt--size--sm"
              />
            </div>
            <div className='cell'>
              <p className='cell-title'>&lt;Input size="inpt--size--md" /&gt;</p>
              <TextInput
                label="Label"
                id="seventhInput"
                name="seventhInput"
                type="text"
                placeholder="Placeholder"
                size="inpt--size--md"
              />
            </div>
          </div>

          <div className='row'>
            <div className='cell cell-full-width' >
              <p className='cell-title'>&lt;Input width="fullWidth" /&gt;</p>
              <TextInput
                label="Label"
                id="eighthInput"
                name="eighthInput"
                type="text"
                placeholder="Placeholder"
                width="fullWidth"
              />
            </div>
          </div>
          <div className='row'>
            <div className='cell cell-full-width' >
              <p className='cell-title'>&lt;Textarea rows="4" /&gt;</p>
              <TextArea
                label="Textarea"
                id="firstTxtArea"
                name="firstTxtArea"
                placeholder="Placeholder"
                rows='4'
              />
            </div>
          </div>
        </form>
      </Formik>
    </>
  );
};

export default Form;
