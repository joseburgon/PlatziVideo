import React from 'react';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2 tabIndex='0'>Inicio de Sesión</h2>
      <form action='' className='login__container--form'>
        <input aria-label='correo' type='text' className='input' placeholder='Correo' />
        <input aria-label='password ' type='password' className='input' placeholder='Contraseña' />
        <button className='button' type='button'>Iniciar Sesión</button>
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' name='remember' id='cbox1' value='checkbox' />
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
        <a href='/'> Regístrate</a>
      </p>
    </section>
  </section>
);

export default Login;
