import React,{ Suspense } from 'react'
import ReactDOM from 'react-dom/client'
const App = React.lazy(() => import('./App'))
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h2> Please refresh if this takes too long.</h2>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)
