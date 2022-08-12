import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formine = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          celular
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit"  className="btn btn-outline-secondary" disabled={isSubmitting}>
            Iniciar sesión
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Formine;