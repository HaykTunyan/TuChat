import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ChatListItem } from "../../components";
import chats from '../../utils/json/chat.json'

export function ChatView() {

    /**
     * Hooks.
     */

    console.log(" chat Opetion  ", chats)


    const handleOpenChat = () => {
        console.warn(" Chat Opetion ")
    }

    return (
        <View>
         
                <FlatList
                    data={chats}
                    renderItem={({ item }) => <ChatListItem chats={item} />}
                />
       
        </View>
    )
}