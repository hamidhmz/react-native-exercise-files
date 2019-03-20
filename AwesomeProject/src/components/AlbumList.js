import React,{ Component } from "react";
import { ScrollView, Text } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount(){
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
            .then(response => this.setState({ albums: response.data }))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                 // ADD THIS THROW error
                throw error;
            });;
    }
    renderAlbums(){
        // var albumss = [];
        // this.state.albums.forEach((album, index) => albumss[index]=<AlbumDetail key={album.title} album={album} />);
        // console.log(albumss,"this is array");
        // console.log(this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />),"this is map");
        // return albumss;
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }
    render(){
        // console.log(this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
};

export default AlbumList; 