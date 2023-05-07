import {
    View, Text, ImageBackground, StyleSheet, FlatList,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import BG from "../../assets/img/BG.png";
import messages from "../../utils/json/messages.json"
import { InputBox, Messages } from '../../components';

export function MessageView() {
    return (
        // <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ImageBackground source={BG} style={styles.bg}>

                <FlatList

                    data={messages}
                    renderItem={({ item }) =>
                        <Messages messages={item} inverted />
                    }
                />
                <InputBox />
            </ImageBackground>

        // </KeyboardAvoidingView >
    )
}


const styles = StyleSheet.create({
    bg: {
        flex: 1,

    },


})