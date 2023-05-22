import React from 'react';
import { Provider } from 'react-redux';
import UpDateUserModal from './UpDateUserModal';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    <UpDateUserModal
      onHide={() => false}
      show
    />
    );
  </Provider>;
});
