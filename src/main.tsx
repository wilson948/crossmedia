import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
<div className="p-4 bg-white rounded-2xl shadow-md">
  <img
    src={product.image}
    alt={product.name}
    className="w-32 h-24 object-contain rounded-xl mx-auto"
  />
  <h3>{product.name}</h3>
</div>

