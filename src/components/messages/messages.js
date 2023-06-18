import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import { formatDistance, subDays ,format, compareAsc  } from 'date-fns';

export function Messages({ messages }) {

  const isMyMessages = () => {
    return messages.user.id === "u1"
  }

  return (

    <View style={[styles.constainer, {
      backgroundColor: messages.user.id === "u1" ? "green" : "white",
      alignSelf: messages.user.id === "u1" ? "flex-end" : "flex-start"
    }]}>
      <Text style={{
        color: messages.user.id === "u1" ? "white" : 'black'
      }}> {messages?.text} </Text>

      <Text style={[styles.time, {
        color: messages?.user?.id !== "u1" ? "black" : "white"
      }]}>
        {/* {messages?.createdAt} */}
        {format(new Date(messages?.createdAt), 'MM/dd/yyyy')}
        {/* {dayjs(messages?.createdAt).fromNow(true)}  */}
      </Text>
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
    marginTop: 10,
    color: "grey",
    alignSelf: "flex-end",
  }
})



