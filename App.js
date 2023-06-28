import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { app_ } from './Styling';
import textDesgin from './Styling'

export default function App() {

  let [value, setValue] = useState(0)

  function add(own){
    let temp = value + own
    setValue(temp)
  }

  function sub(own){
    let temp = value - own
    setValue(temp)
  }

  return (
    <View style={app_.container}>
      <Text style={{ fontSize: 30 }}>{value}</Text>
      <View style={app_.btnWrapper}>
        <TouchableOpacity style={app_.button}>
          <Text style={textDesgin.text}>ADD</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[app_.button, {backgroundColor: 'green', elevation: 4}]}>
          <Text style={textDesgin.text}>MINU</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}