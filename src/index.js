// base
import React from 'react'
import ReactDOM from 'react-dom'

// redux
import { Provider } from 'react-redux'
import { store } from './redux/store'

// components
import App from './App'

// styles
import './index.css'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
