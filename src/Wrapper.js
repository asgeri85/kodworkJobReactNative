import React from 'react';
import FavoriteProvider from './context/FavoriteProvider';
import Router from '../Router';

const Wrapper = () => {
  return (
    <FavoriteProvider>
      <Router />
    </FavoriteProvider>
  );
};

export default Wrapper;
