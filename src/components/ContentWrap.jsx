import React from 'react';
import '../assets/styles/components/ContentWrap.scss';

const ContentWrap = ({ children }) => (
  <div className='content-wrap'>
    { children }
  </div>
);

export default ContentWrap;
