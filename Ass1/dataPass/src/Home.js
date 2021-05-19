import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            text:''
        }
    }

    render() {
        return (
        <View style={styles.container}>
        <TextInput
        style={{height: 40, width: 160, marginBottom: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Button
        onPress={()=>{this.props.navigation.navigate('Sample', {
            data: this.state.text
          });}}
        title="Press to Navigate"
        color="#841584"
      />
         </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        height: 180,
        width: 200,
        transform: [{ rotate: '90deg' }]
    }
});


export default Home;