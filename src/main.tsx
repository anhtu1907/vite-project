import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';

import '@/app/styles/index.scss';
import App from '@/app/App'

import '@/shared/config/i18n/i18n';

import { ErrorBoundary, ThemeProvider } from './app/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>

    </BrowserRouter>
  </StrictMode>,
)
