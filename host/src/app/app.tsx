import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Asset = React.lazy(() => import('asset/Module'));

const Facility = React.lazy(() => import('facility/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/asset">Asset</Link>
        </li>
        <li>
          <Link to="/facility">Facility</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/asset" element={<Asset />} />
        <Route path="/facility" element={<Facility />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
