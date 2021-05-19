import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Sample extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:''
        }
    }

    componentDidMount(){
    const data = this.props.navigation.getParam('data', 'some default value');
    this.setState({
    data
    });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.data}</Text>
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
});

export default Sample;