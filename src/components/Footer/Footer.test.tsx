import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Footer from './Footer';

test('render footer', () => {
  <Provider store={store}>
    render(
    <Footer />
    );
  </Provider>;
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn()),
}));
