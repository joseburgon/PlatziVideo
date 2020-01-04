import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = props => {
  const [form, setValues] = useState({
    email: ''
  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  }

  return (
    <section className='login'>
      <section className='login__container'>
        <h2 tabIndex='0'>Inicio de Sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            type='text'
            className='input'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password '
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>Iniciar Sesión</button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input
                type='checkbox'
                name='remember'
                id='cbox1'
                value='checkbox'
              />
              Recuérdame
          </label>
            <a href='#'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='Google' />
            Inicia sesión con Google
        </div>
          <div>
            <img src={twitterIcon} alt='Google' />
            Inicia sesión con Twitter
        </div>
        </section>
        <p className='login__container--register'>
          ¿No tienes ninguna cuenta?
        <Link to='/register'>
            Regístrate
        </Link>
        </p>
      </section>
    </section>
  );
}

const mapDispatchToProps = {
  loginRequest
};

export default connect(null, mapDispatchToProps)(Login);