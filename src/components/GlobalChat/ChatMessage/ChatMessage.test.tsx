import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ChatMessage from './ChatMessage';
import { store } from '../../store/store';

test('render footer', () => {
  <Provider store={store}>
    render(
    <ChatMessage />
    );
  </Provider>;
});
