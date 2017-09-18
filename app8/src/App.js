import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        let config = {
            apiKey: 'AIzaSyAKkBQlt3R6T00BLjlnhTCQcp1gGI1lbxA',
            authDomain: 'whatsapp-clone-666.firebaseapp.com',
            databaseURL: 'https://whatsapp-clone-666.firebaseio.com',
            projectId: 'whatsapp-clone-666',
            storageBucket: 'whatsapp-clone-666.appspot.com',
            messagingSenderId: '96008377368'
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Routes />
            </Provider>
        );
    }
}
export default App;
