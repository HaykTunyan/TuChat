import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useForm, Controller } from "react-hook-form";

export function SignIn() {

    /**
     * Hooks.
     */

    const navigation = useNavigation();
    
    const handleSignIn = () => {
        navigation.navigate('Chat')
    }

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            phone: "",
            fullName: "",
            email: "",

        },
    });


    console.log(" errors errors ", errors)

    const onSubmit = (data) => {
        console.log(" data send ", data)
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Text style={styles.bannerTitle}> Welcome to  TuChat </Text>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View>
                        <Text>
                            Full Name
                        </Text>
                        <Controller
                            control={control}
                            name="fullName"
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Full Name"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                />
                            )}
                        />
                        {errors.firstName && <Text>This is required.</Text>}
                    </View>
                    <View>
                        <Text>
                            Email
                        </Text>
                        <Controller
                            control={control}
                            rules={{
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    placeholder="Eamil"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.input}
                                />
                            )}
                            name="email"
                        />
                    </View>
                </KeyboardAvoidingView>
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />

            </View>
        </ScrollView>
    )
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },

    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },

    banner: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
    },

    bannerTitle: {
        fontSize: 20,
        fontWeight: 600,
    },

});
