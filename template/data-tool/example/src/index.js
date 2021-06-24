import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { SnackbarProvider } from 'notistack';
import App from './components/App'

ReactDOM.render(
  <SnackbarProvider preventDuplicate>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
)
