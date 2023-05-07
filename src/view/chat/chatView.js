import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import { ChatListItem } from "../../components";
import chats from '../../utils/json/chat.json'



export function ChatView() {
    return (
        <FlatList
            data={chats}
            renderItem={({ item }) => <ChatListItem chats={item} />}
        />
    )
}