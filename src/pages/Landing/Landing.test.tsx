import React from 'react';
import { Provider } from 'react-redux';
import LandingPage from './LandingPage';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <LandingPage />
    );
  </Provider>;
});
