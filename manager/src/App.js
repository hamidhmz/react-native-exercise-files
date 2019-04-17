import React,{Component} from "react";
import {View,Text} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import firebase from 'firebase/app';
import reducers from "./reducers";

class App extends Component {
    componentWillMount(){
         // Initialize Firebase
        const config = {
            apiKey: "AIzaSyC1f5CE7Nw42mkuUzujGeCqRXIzjsEYPxU",
            authDomain: "manager-134a0.firebaseapp.com",
            databaseURL: "https://manager-134a0.firebaseio.com",
            projectId: "manager-134a0",
            storageBucket: "manager-134a0.appspot.com",
            messagingSenderId: "906951366371"
        };
        firebase.initializeApp(config);
    }
    render(){
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello world!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;