import React from 'react';
import { Provider } from 'react-redux';
import UserPage from './UserPage';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <UserPage />
    );
  </Provider>;
});
