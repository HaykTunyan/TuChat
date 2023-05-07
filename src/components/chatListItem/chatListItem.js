import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

// Images.
const Accont = "../../assets/img/account.jpg"

export function ChatListItem({ chats }) {
    console.log(" chats ", chats)
    return (
        <View style={styles.itemContainer} key={chats.id} >
            {chats?.image ? (
                <Image source={{ uri: chats?.image }} style={styles.image} />
            ) : (
                <Image source={require(Accont)} style={styles.image} />
            )}

            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>
                        {chats?.user}
                    </Text>
                    <Text>
                        {dayjs(chats?.lastMessage?.createdAt).fromNow()}
                    </Text>
                </View>
                <Text numberOfLines={1} style={styles.messages}>
                    {chats.lastMessage?.text}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },

    image: {
        width: 60,
        height: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray'

    },

    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },

    name: {
        flex: 1,

        fontWeight: 'bold'
    },

    time: {
        color: 'gray',
        fontWeight: '600',
    },

    messages: {
        color: 'gray'

    },

})