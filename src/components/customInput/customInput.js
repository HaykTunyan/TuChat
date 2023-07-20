import React from "react";
import { View, Text, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { Controller } from "react-hook-form";

export const CustomInput = ({
    control,
    name,
    rules,
    defaultValue,
    render
}) => {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <Controller>
            </Controller>
        </KeyboardAvoidingView>
    )
} 