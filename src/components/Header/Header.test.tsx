import React from 'react';
import { Provider } from 'react-redux';
import Header from './Header';
import { store } from '../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    <Header />
    );
  </Provider>;
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
}));
