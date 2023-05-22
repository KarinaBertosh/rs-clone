import React from 'react';
import { Provider } from 'react-redux';
import UserInfo from './UserInfo';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <UserInfo />
    );
  </Provider>;
});
