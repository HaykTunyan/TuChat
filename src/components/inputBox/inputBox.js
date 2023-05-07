import React, { useState }  from 'react';
import { View, Button, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

export function InputBox() {

  /**
   * Hooks.
   * 
   */


  const [ sendMessages , setSendMessages ] = useState('')



  const addFile = () => {
    console.warn(" add file ")
  }

  const handleSendMessages = () => {

    setSendMessages("");

    console.warn(" send Info ",sendMessages  );
  }

  return (
    <View style={styles.inputContainer}>
      {/* Icon Add */}
      <TouchableOpacity onPress={addFile}>
        <Image style={styles.addStyle} source={require('../../assets/add_24dp.png')} />
      </TouchableOpacity>
      {/* Input */}
      <TextInput placeholder='Send Messages' style={styles.input}   value={sendMessages}   onChangeText={setSendMessages} />
      {/* Icon Sned */}
      <TouchableOpacity   style={styles.sendBtn} onPress={handleSendMessages}>
        <Image style={styles.addStyle} source={require('../../assets/send_24dp.png')} />
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "whitesmoke",
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  addStyle: {
    width: 25,
    height: 25,
  },

  input: {
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 50,
    marginHorizontal: 10,
    borderColor: 'lightgrey',
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },

  sendBtn: {
    backgroundColor: "blue",
    overflow: 'hidden',
    padding: 7,
    borderRadius: 15,
  }
})