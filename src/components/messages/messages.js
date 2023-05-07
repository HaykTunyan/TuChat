import { View, Text, StyleSheet , TextInput  } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';

export function Messages({ messages }) {
 console.log(" messagess  ", messages )
 
const isMyMessages = () => {
  return messages.user.id  === "u1"
}





  return (

    <View style={[styles.constainer, {
      backgroundColor: messages.user.id === "u1" ? "green" : "white " ,
      alignSelf: messages.user.id === "u1" ? "flex-end" : "flex-start" 
    }  ] }>
      <Text style={{
        color: messages.user.id === "u1" ? "white" : 'black'
      }}> {messages?.text} </Text>

      <Text  style={styles.time}>
        {messages?.createdAt}
      {/* {dayjs(messages?.createdAt).fromNow(true)} */}
      </Text>
      {/* <Text style={[ styles.time, {
        color: messages.user.id === "u1" ? "white" : "black"
      }  ]} > {dayjs(messages?.createdAt).fromNow(true)} </Text> */}
    </View>
  )
};


const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "flex-start",
    padding: 10,
    margin: 8,
    borderRadius: 10,
    maxWidth: "80%",
  },


  time: {
    color: "grey",
    alignSelf: "flex-end",
  }
})



