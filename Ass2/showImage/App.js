import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';
 
export default class Example extends Component{
  constructor(){
    super()
    this.state={
      dataSourece:[],
      isLoading:true
    }
  }
  renderItem=({item})=>{
    return(
    <View style={{flex:3,flexDirection:'column', marginBottom: 3}}>
      <Image style={{ width:80, height:80, margin: 5}}
      source={{uri: item.image}}/>
    </View>)
    
  }
  componentDidMount(){
    const url='http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
    fetch(url)
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        dataSourece: responseJson.book_array,
        isLoading:false
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render(){
    return(
    this.state.isLoading
    ?
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size='large'color='#330066' animating />
    </View>
    :
      <View style={styles.container}>
        <FlatList
        data={this.state.dataSourece}
        renderItem={this.renderItem}
        numColumns={3}
        keyExtractor={(item, index)=>index}
        ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
  }
});