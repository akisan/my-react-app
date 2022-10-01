import axios from 'axios';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';

const Home = lazy(() => import('./routes/Home'));

function App() {
  return (
    <React.StrictMode>
      <SWRConfig
        value={{
          fetcher: (url, config) =>
            axios.get(url, config).then((res) => res.data),
        }}
      >
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </SWRConfig>
    </React.StrictMode>
  );
}

export default App;
