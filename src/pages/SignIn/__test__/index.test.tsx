import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../';
import AuthProvider from '../../../context/AuthProvider';

test('renders learn react link', () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <SignIn />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
  const titleElement = screen.getByText(/My React App/i);
  expect(titleElement).toBeInTheDocument();
});
