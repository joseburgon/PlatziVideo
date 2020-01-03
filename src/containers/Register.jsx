import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2 tabIndex='0'>Regístrate</h2>
      <form action='' className='register__container--form'>
        <input type='text' className='input' placeholder='Nombre' />
        <input type='text' className='input' placeholder='Correo' />
        <input type='password' className='input' placeholder='Contraseña' />
        <button className='button' type='button'>Registrarme</button>
      </form>
      <p className='register__container--register'><a href='/'>Inicio de sesión</a></p>
    </section>
  </section>
);

export default Register;
