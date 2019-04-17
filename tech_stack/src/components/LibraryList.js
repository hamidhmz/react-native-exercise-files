import React,{Component} from "react";
import {connect} from "react-redux";
import ListItem from "./ListItem";
import { View, FlatList, ScrollView, Text } from 'react-native';
class LibraryList extends Component{
    constructor(props) {
        super(props);
        this.state = {enableScrollViewScroll: true};
    }
    renderItem({item}){
        return <ListItem library={item} />;
    }
    render(){
        console.log(this.props.libraries.title);
        return(
            <ScrollView
            scrollEnabled={this.state.enableScrollViewScroll}
            ref={myScroll => (this._myScroll = myScroll)}>
                <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        )
    }
}

const mapStateToProps = state =>{
    return { libraries:state.libraries };
};
export default connect(mapStateToProps)(LibraryList);