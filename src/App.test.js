import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/store';

describe('App', () => {
  it('App test', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/select columns/i)).toBeVisible();
    expect(
      screen.getByRole('button', { name: /select columns/i })
    ).toBeVisible();
    expect(await screen.findByText(/leanne/i)).toBeVisible();
    expect(await screen.findByText(/hoeger/i)).toBeVisible();
    expect(screen.getByText(/email/i)).not.toBeVisible();
    expect(screen.getByPlaceholderText(/search/i)).not.toBeVisible();
    expect(screen.queryByText(/sincere/i)).toBeNull();

    userEvent.click(screen.getByRole('button'));
    expect(screen.getByPlaceholderText(/search/i)).toBeVisible();
    expect(screen.getByText(/email/i)).toBeVisible();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'id' },
    });
    expect(screen.queryByText(/email/i)).toBeNull();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'email' },
    });
    expect(screen.getByText(/email/i)).toBeVisible();

    userEvent.click(screen.getByText(/email/i));
    userEvent.click(screen.getByText(/apply/i));
    expect(screen.getByText(/sincere/i)).toBeVisible();
  });
});
