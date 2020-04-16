import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
// import AppWithReduxHooks from './AppWithReduxHooks'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import initialState from './utils/initialState'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)