import React, {useState} from 'react'
import {View, Text} from 'react-native'
import Geolocation from '@react-native-community/geolocation'
const App=()=>{
  const [info,setInfo]=useState(0)
  const [info1,setInfo1]=useState(1)
  Geolocation.getCurrentPosition(data=>{
  setInfo(data.coords.latitude)
  setInfo1(data.coords.longitude)
  })
  console.warn("Geolocation")
  return(
    <View>
      <Text style={{fontSize:70}}>latitude :{info} longitude : {info1}</Text>
    </View>
  )
}
export default App