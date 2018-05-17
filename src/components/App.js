import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import CounterContainer from 'containers/CounterContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    );
  }
}

export default App;
