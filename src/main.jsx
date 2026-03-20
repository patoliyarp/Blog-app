import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthContextProvider from './context/AuthContextProvider.jsx';
import BlogContextProvider from './context/BlogContextProvider.jsx';
import { ErrorFallback } from './components/FallbackError.jsx';
import { ErrorBoundary } from 'react-error-boundary';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <BlogContextProvider>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
          <App />
        </ErrorBoundary>
      </BlogContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
