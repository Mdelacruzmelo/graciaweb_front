import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Characters from './pages/Characters';

const App = () => useRoutes([
  {
    path: '/', element: <Characters />
  }
])

const Wrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Wrapper;
