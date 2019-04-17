import React,{ Component } from "react";
import { View,Text } from "react-native";
import { Header,Button, CardSection,Spinner } from "./components/common";
// import firebase from "firebase";
import firebase from '@firebase/app';
import LoginForm from "./components/LoginForm";

class App extends Component{
state = { loggedIn:null };

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDSKtHDauqX9_ElIlCBKUgB5na5Gv1p5fY",
            authDomain: "authentication-bdf6a.firebaseapp.com",
            databaseURL: "https://authentication-bdf6a.firebaseio.com",
            projectId: "authentication-bdf6a",
            storageBucket: "authentication-bdf6a.appspot.com",
            messagingSenderId: "818374841930"
        });

        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false});
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return(
                    <CardSection>
                        <Button onPress={()=>firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>
            default:
                return (
                    <CardSection>
                        <Spinner size="large"/>
                    </CardSection>
                );
        }


    }
    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;