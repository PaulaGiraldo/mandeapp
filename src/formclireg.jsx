import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormVal = Yup.object({
    nombre: Yup.string().required('Necesario'),
    apellido: Yup.string().required('Necesario'),
    direccion: Yup.string().required('Necesario'),
    email: Yup.string().email().required('Necesario'),
    celular: Yup.number().required('Necesario').positive().integer(),
    recibo: Yup.string().required('Necesario'),
    mediopago: Yup.string().required('Necesario')
});

const Formclir = () => (
  <div>
    <Formik
      initialValues={{ nombre: '', apellido: '',direccion:'',email:'',celular:'',recibo:undefined,mediopago:'' }}
      validationSchema = {FormVal}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Necesario';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Correo inválido';
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
            Nombre
            <Field type="nombre" name="nombre"/>
            <ErrorMessage name="nombre" component="div" />
            Apellido 
            <Field type="apellido" name="apellido"/>
            <ErrorMessage name="apellido" component="div" />
            Dirección 
            <Field type="direccion" name="direccion"/>
            email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          Número de celular
          <Field type="celular" name="celular" />
          <ErrorMessage name="celular" component="div" />
          Recibo de servicio público* 
          <input type ="file" name="recibo"/>
          <ErrorMessage name="recibo" component="div" />
          Medio de pago 
          <Field type="mediopago" name="mediopago"/>
          <ErrorMessage name="mediopago" component="div" />
          Tarjeta débito o crédito
          <button type="submit"  className="btn btn-outline-secondary" disabled={isSubmitting}>
            Registrarme
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Formclir;