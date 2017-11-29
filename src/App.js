import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import {renderRoutes, routesMap} from 'routes'
import 'bootstrap/dist/css/bootstrap.css'
import Root from "./view/index";
import {ConnectedRouter} from 'react-router-redux';
class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  render() {
    const {store, history} = this.props
    return (
        <Provider store={store}>
          <Router history={history}>
            <Root>
                <div>
                  {renderRoutes(routesMap)}
                </div>
            </Root>
          </Router>
        </Provider>
    )
  }
}

export default App;
