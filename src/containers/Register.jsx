import React, { useState} from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: ''
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  }

  return (
    <section className='register'>
      <section className='register__container'>
        <h2 tabIndex='0'>Regístrate</h2>
        <form action='' className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            className='input'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            type='text'
            className='input'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Registrarme</button>
        </form>
        <p className='register__container--register'>
          <Link to='/login'>
            Inicio de sesión
        </Link>
        </p>
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  registerRequest
};

export default connect(null, mapDispatchToProps)(Register);
