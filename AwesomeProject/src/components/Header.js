import React from "react";
import { Text,View } from "react-native";
 
const Header = (props) => {
    const { textStyle,viewStyle } = styles;
    
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle:{
        backgroundColor:"#F8F8F8",
        justifyContent:"center",
        alignItems:"center",
        height:60,
        paddingTop:15,
        shadowOffset: { width: 10, height: 100 },
        shadowColor: '#000',
        shadowOpacity: 2,
        elevation:10,
        position:"relative"
    },
    textStyle:{
        fontSize: 20
    }
};
export default Header; 