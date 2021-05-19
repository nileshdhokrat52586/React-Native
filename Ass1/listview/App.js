import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Akshay',
         },
         {
            id: 1,
            name: 'Saurabh',
         },
         {
            id: 2,
            name: 'Rushi',
         },
         {
            id: 3,
            name: 'Ashish',
         },
         {
          id: 4,
          name: 'Nilesh',
       },
       {
          id: 5,
          name: 'Ajay',
       },
       {
          id: 6,
          name: 'Ankit',
       },
       {
          id: 7,
          name: 'Murti',
       }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
         </View>
      )
   }
}
export default List
const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
})