import { Suspense } from 'react';

import { AppRouter } from './providers';
import './styles/index.scss';


function App() {
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  )
}

export default App
