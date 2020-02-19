import React, { useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import * as Yup from 'yup';

import './App.css';

import Input from './components/Form/Input';

function App() {
  const formRef = useRef(null);

  // initialData when the data is static
  const initialData = {
    email: 'jpfricks@gmail.com',
    address: {
      city: 'Curitiba'
    }
  }

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório.'),
        email: Yup.string()
          .email('Digite um e-mail válido.')
          .required('O e-mail é obrigatório.'),
        password: Yup.string(),
        address: Yup.object().shape({
          street: Yup.string()
            .required('A rua é obrigatória.'),
          number: Yup.number()
            .required('O número é obrigatório.'),
          neighborhood: Yup.string()
            .required('O bairro é obrigatório.'),
          city: Yup.string()
            .min(3, 'No mínimo 3 caracteres.')
            .required('A cidade é obrigatória.'),
          state: Yup.string()
            .min(3, 'No mínimo 3 caracteres.')
            .required('O estado é obrigatório.')
        })
      });
      
      await schema.validate(data, {
        abortEarly: false,
      });
      
      console.log(data);

      formRef.current.setErrors({});
  
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        console.log(err);

        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }

    // if (data.name === '') {
    //   // formRef.current.setFieldError('name', 'O nome é obrigatório.'); // for unique value
      
    //   formRef.current.setErrors({
    //     name: 'O nome é obrigatório.',
    //     address: {
    //       city: 'A cidade é obrigatória.'
    //     }

    //   }); // for multiple values
    // }
 
  }

  // setData when the data comes from API
  useEffect(() => {
    setTimeout(() => {
      formRef.current.setData({
        name: 'João Paulo',
        email: 'jpfricks@gmail.com',
        address: {
          city: 'Curitiba'
        }
      })
    }, 2000)
  }, []);

  return (
    <div className="App">
      <h1>Hello Unform 2</h1>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" />
        <Input type="email" name="email" />
        <Input type="password" name="password" />

        <Scope path="address">
          <Input name="street" />
          <Input name="number" />
          <Input name="neighborhood" />
          <Input name="city" />
          <Input name="state" />
        </Scope>

        <button type="submit">Enviar </button>
      </Form>
    </div>
  );
}

export default App;
