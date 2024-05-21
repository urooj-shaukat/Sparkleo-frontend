import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const SignIn = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading Sparkleo App....</div>}>
      <SignIn />
    </Suspense>
  </React.StrictMode>,
)
