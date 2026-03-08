import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('🚀 main.tsx is running');
console.log('📦 React version:', React.version);

const rootElement = document.getElementById('root');
console.log('🔍 Root element:', rootElement);

if (!rootElement) {
  console.error('❌ Root element not found! Check index.html for <div id="root"></div>');
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('✅ React rendered successfully');
  } catch (error) {
    console.error('❌ Error rendering React:', error);
  }
}