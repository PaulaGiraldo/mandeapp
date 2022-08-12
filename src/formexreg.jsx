import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import * as Yup from 'yup';

const laboresE = [
    {value:"plomero" ,label:"Plomero"},
    {value:"cerrajero" ,label:"Cerrajero"},
    {value:"paseadorPerros" ,label:"Paseador de perros"},
    {value:"manicurista" ,label:"Manicurista"},
    {value:"peluqueria" ,label:"Peluqueria"},
    {value:"barberia" ,label:"Barberia"},
    {value:"tutoriaArte" ,label:"Tutoria de arte"},
    {value:"limpiaVentanas" ,label:"Limpieza de ventanas"},
    {value:"maquillista" ,label:"Maquillista"},
    {value:"modista" ,label:"Modista"},
];

const FormVal = Yup.object({
    nombre: Yup.string().required('Necesario'),
    apellido: Yup.string().required('Necesario'),
    direccion: Yup.string().required('Necesario'),
    email: Yup.string().email().required('Necesario'),
    celular: Yup.number().required('Necesario').positive().integer(),
    fotop: Yup.string().required('Necesario'),
    labores: Yup.string().required('Necesario'),
    documento: Yup.string().required('Necesario')
});

const Formexr = () => (
  <div>
    <Formik
      initialValues={{ nombre: '', apellido: '',direccion:'',email:'',celular:'',fotop:undefined,labores:[],documento:undefined }}
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
          Foto de perfil 
          <input type ="file" name ="fotop"/>
          <ErrorMessage name="fotop" component="div" />
          Documento de identidad
          <input type ="file" name="documento"/>
          <ErrorMessage name="documento" component="div" />
          Labores a desempeñar
          <Select
            defaultValue={[]}
            isMulti
            name="Labores"
            options={laboresE}
            className="basic-multi-select"
            classNamePrefix="select"
            />
          <button type="submit"  className="btn btn-outline-secondary" disabled={isSubmitting}>
            Registrarme
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Formexr;