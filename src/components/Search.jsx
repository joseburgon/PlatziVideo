import React from 'react';
import { connect } from 'react-redux';
import { setSearchText } from '../actions';
import '../assets/styles/components/Search.scss'

const Search = ({ setSearchText }) => {

  const handleInput = event => {
    setSearchText(event.target.value);
  }

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        name='searchText'
        className='main__input'
        type='text'
        placeholder='Buscar...'
        onChange={handleInput}
      />
    </section>
  );
}

const mapDispactchToProps = {
  setSearchText
}

export default connect(null, mapDispactchToProps)(Search);