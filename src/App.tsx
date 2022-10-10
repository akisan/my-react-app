import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Layout from './components/Layout';
import AuthProvider from './context/AuthProvider';
import useAuth from './hooks/useAuth';

const queryClient = new QueryClient();

const Home = React.lazy(() => import('./pages/Home'));
const SignIn = React.lazy(() => import('./pages/SignIn'));

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AuthProvider>
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Layout />
                  </RequireAuth>
                }
              >
                <Route index element={<Home />} />
              </Route>
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </AuthProvider>
        </React.Suspense>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
