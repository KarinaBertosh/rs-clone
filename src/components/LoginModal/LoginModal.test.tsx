import React from 'react';
import { Provider } from 'react-redux';
import LoginModal from './LoginModal';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <LoginModal show={false} onHide={() => true} />
    );
  </Provider>;
});
