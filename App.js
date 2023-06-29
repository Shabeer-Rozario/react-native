import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
import { app_ } from './Styling';
import textDesgin from './Styling'

export default function App() {

  let [value, setValue] = useState('')

  return (
    <View style={app_.container}>
      <Text style={{ fontSize: 30 }}>{value}</Text>
      <TextInput placeholder='Enter your name'
      onChangeText={(e) => setValue(e)}
      />
    </View>
  );
}