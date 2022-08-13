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
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
      };
      fetch('http://localhost:5000/logintrab', requestOptions)
      .then(response => {
        if(response.status === 200){
          return response.json()
        }else{
          alert('Login Incorrecto')
        }
      })
      .then(data=>{
        data["type"] = 'expert';
        localStorage.setItem('login', JSON.stringify(data))
        window.location.replace('/inicioe')
      })
      setSubmitting(false)
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