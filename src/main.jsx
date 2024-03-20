import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Loading from './Loading';


const LazyComponent = React.lazy(() => import("./App.jsx"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  </React.StrictMode>
);