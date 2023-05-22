import React from 'react';
import { Provider } from 'react-redux';
import FindFriendsPage from './FindFriendsPage';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <FindFriendsPage />
    );
  </Provider>;
});
