import React, { Component, Fragment } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import Home from 'pages/home'
import Find from 'pages/find'
import Order from 'pages/order'
import My from 'pages/my'
import Seles from 'businesses/sales/sales'

const store = createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeWithDevTools(applyMiddleware(
    thunkMiddleware
  ))
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Provider store={store}>
            <Fragment>
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route path="/home" component={Home} />
                <Route path="/find" component={Find} />
                <Route path="/order" component={Order} />
                <Route path="/my" component={My} />
                <Route path="/seles/:id" component={Seles} />
              </Switch>
            </Fragment>
          </Provider>
        </HashRouter>
      </div>
    );
  }
}

export default App;
