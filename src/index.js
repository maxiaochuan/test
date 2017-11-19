import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import createHistory from 'history/createBrowserHistory'
import createStore from 'store'
import registerServiceWorker from './registerServiceWorker'

const environment = window || this

const historyConfig = {
  // forceRefresh: true,
  basename: process.env.PUBLIC_URL,
}

const history = createHistory(historyConfig)

const initialState = environment.__INITIAL_STATE__

const store = createStore(initialState, history)

const MOUNT_NODE = document.getElementById('__content')

ReactDOM.render(
  <App store={store} history={history}></App>,
  MOUNT_NODE
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp store={store} historyConfig={historyConfig}></NextApp>,
      MOUNT_NODE
    )
  })
}

registerServiceWorker()
