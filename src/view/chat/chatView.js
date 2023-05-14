import React from "react";
import { ScrollView, View, FlatList, Text } from "react-native";
import { ChatListItem } from "../../components";
import chats from '../../utils/json/chat.json'



export function ChatView() {
    return (

        <View>

            <Text>  Hello Chat </Text>
            <FlatList
                data={chats}
                renderItem={({ item }) => <ChatListItem chats={item} />}
            />

        </View>
    )
}