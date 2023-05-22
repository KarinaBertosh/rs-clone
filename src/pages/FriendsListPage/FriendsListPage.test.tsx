import React from 'react';
import { Provider } from 'react-redux';
import FriendsListPage from './FriendsListPage';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <FriendsListPage />
    );
  </Provider>;
});
