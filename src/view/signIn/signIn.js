import { useNavigation } from "@react-navigation/native";
import React, { useState }  from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity } from "react-native";

export const SignIn = () => {

const navigation = useNavigation()
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');

    const handleSignIn = () => {
        navigation.navigate('Chat')
    }
    
    
    return (
        <ScrollView style={{ flex: 1 }}>
            <View>

                <Text> Sign In Your Account </Text>
                <SafeAreaView>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />


                    <TouchableOpacity  onPress={handleSignIn}>
                        <Text>
                        Sign In
                        </Text>
                   
                    </TouchableOpacity>
                </SafeAreaView>

            </View>
        </ScrollView>
    )
};



const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
