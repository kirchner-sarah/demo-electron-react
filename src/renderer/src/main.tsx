import './base.css';
import './globales.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

createRoot(document.body).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
