import React from 'react';
import '../assets/styles/components/PageContainer.scss';

const PageContainer = ({ children }) => (
  <div className='page-container'>
    { children }
  </div>
);

export default PageContainer;
