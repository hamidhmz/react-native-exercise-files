import React , { Component } from "react";
import { Text,View,TextInput,Platform } from "react-native";
import { Button,Card,CardSection,Input,Spinner } from "./common";
import firebase from "@firebase/app";
// import firebase from 'firebase';
require('firebase/auth');

class LoginForm extends Component{
    state = { email:"" ,password:"",error:"",loading:false };
    
    

    onButtonPress(){
        const{email,password} = this.state;
        this.setState({error:"",loading:true});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))//we don't know what we want add to this in future so we just bind(this)
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))//we don't know what we want add to this in future so we just bind(this)
            .catch(() => {
                this.setState({error:"Authentication Failed."})
            });
        });
    }

    onLoginFail(){
        this.setState({error:"Authentication Failed",loading:false});
    }
    onLoginSuccess(){
        this.setState({
            email:"",
            password:"",
            loading:false,
            error:""
        });
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size="small"/>
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="User@gmail.com"
                        label="Email"
                        value={this.state.text}
                        onChangeText={email=>this.setState({ email })}
                    /> 
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password=>this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:"center",
        color:"red"
    }
};

export default LoginForm;