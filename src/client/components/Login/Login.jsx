import React from 'react';
import {Formik, Form} from 'formik';
import RenderField from '../Input/RenderField';

export default function Login() {
  return (
    <Formik
      // Sets up our default values
      initialValues={{email: '', password: ''}}

      // Validates our data
      validate={(values) => {
        const errors = {};

        if (!values.email) errors.email = 'Required';

        if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'You must supply a valid email address';
        }

        if (values.password.length < 8) {
          errors.password = 'Passwords must be at least 8 characters';
        }

        if (values.email === values.password) {
          errors.password =
        'Your password shouldn\'t be the same as your email';
        }

        return errors;
      }}

      // Handles our submission
      onSubmit={(values, {setSubmitting}) => {
        // This is where you could wire up axios or superagent
        console.log('Submitted Values:', values);
        // Simulates the delay of a real request
        setTimeout(() => setSubmitting(false), 3 * 1000);
      }}
    >
      {(props) => (
        <Form>
          {/* <label htmlFor="email">Email</label>
          <div>
            <input
              name="email"
              type="email"
              placeholder="Enter your account email"
              value={props.values.email}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              style={{
                borderColor:
              props.errors.email && props.touched.email && 'red',
              }}
            />
            {props.errors.email && props.touched.email && (
              <div style={{color: 'red'}}>{props.errors.email}</div>
            )}
          </div> */}
          <RenderField
            name="email"
            type="email"
            placeholder="Email"
            value={props.values.email}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            touched={props.touched.email}
            error={props.errors.email}
          />
          {/* <label htmlFor="password">Password</label>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Enter your account password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              style={{
                borderColor:
              props.errors.password && props.touched.password && 'red',
              }}
            />
            {props.errors.password && props.touched.password && (
              <div style={{color: 'red'}}>{props.errors.password}</div>
            )}
          </div> */}
          <RenderField
            name="password"
            type="password"
            placeholder="Password"
            value={props.values.password}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            touched={props.touched.password}
            error={props.errors.password}
          />
          <input
            type="submit"
            value="Submit"
            disabled={props.isSubmitting}
            className="bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded"
          />
      &nbsp;
          <input
            type="reset"
            value="Reset"
            onClick={props.handleReset}
            disabled={!props.dirty || props.isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

