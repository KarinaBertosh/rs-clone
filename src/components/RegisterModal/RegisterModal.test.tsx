import React from 'react';
import { Provider } from 'react-redux';
import RegisterModal from './RegisterModal';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    {' '}
    <RegisterModal show onHide={() => !true} />
    );
  </Provider>;
});
