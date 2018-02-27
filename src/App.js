import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
// reduxthunk is middleware so need applymiddleware above
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';


class App extends Component {
componentWillMount() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyD7sYzG-WV6v18Is_Wc06-pCutr5iEPaws',
    authDomain: 'manager-29fff.firebaseapp.com',
    databaseURL: 'https://manager-29fff.firebaseio.com',
    projectId: 'manager-29fff',
    storageBucket: 'manager-29fff.appspot.com',
    messagingSenderId: '743572985464'
  };
  firebase.initializeApp(config);
}
// {} in createstore is for initial values such as password passed to reducer
// applyMiddleware is a store enhancer, adding funtionality to store
// replaced <LoginForm /> with router
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
  }
}

export default App;
