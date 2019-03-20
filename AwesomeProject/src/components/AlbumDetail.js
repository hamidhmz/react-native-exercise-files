import React from "react";
import { View , Text,Image,Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
// const AlbumDetail = (props) => {
const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image,image,url} = album;
    return(
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    {/*<Image source={ { uri:props.album.thumbnail_image } } />*/}
                    {/*<Image source={ { uri:album.thumbnail_image } } />*/}
                    <Image style={styles.thumbnailStyle} source={ { uri:thumbnail_image } } />
                </View>
                <View style={styles.headerContentStyles}>
                {/*<Text>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>*/}
                    {/*<Text>{album.title}</Text>
                    <Text>{album.artist}</Text>*/}
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                    <Image style={styles.imageStyle} source={{uri: image}}/>
            </CardSection>
            <CardSection>
                    <Button onPress={()=>Linking.openURL(url)} >
                        Buy Now
                    </Button>
            </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyles : {
        flexDirection:"column",
        justifyContent:"space-around"
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle:{
        height:50,
        width:50
    },
    thumbnailContainerStyle:{
        justifyContent:"center",
        alignItems:"center",
        marginLeft:10,
        marginRight:10
    },
    imageStyle:{
        height:300,
        flex:1,
        width:null
    }
}
export default AlbumDetail;