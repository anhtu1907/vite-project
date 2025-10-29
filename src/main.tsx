import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/app/styles/index.scss';
import App from '@/app/App'
import '@/shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router';
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
