import React from 'react';
import { Provider } from 'react-redux';
import GlobalFeedPage from './GlobalFeedPage';
import { store } from '../../components/store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <GlobalFeedPage />
    );
  </Provider>;
});
