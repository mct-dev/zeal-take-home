import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { createStore, applyMiddleware, compose } from "redux"
import { hot } from "react-hot-loader"
import Home from "./Containers/Home"
import reducers from "./reducers"
import GlobalStyle from "./theme/globalStyles"

const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancers =
  process.env.NODE_ENV !== "production"
    ? devToolsCompose
    : compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
)

const WrappedHome = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Home />
  </Provider>
)

const HotHome = hot(module)(WrappedHome)

ReactDOM.render(<HotHome />, document.getElementById("home"))
