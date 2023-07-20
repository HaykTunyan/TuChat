import { ChatView, MessageView, SignIn } from "../view";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
    return (
        <SignIn />
    );
}

function ChatScreen() {
    return (
        <ChatView />
    );
}

function MessageSccreen() {
    return (
        <MessageView />
    )
}

const Stack = createNativeStackNavigator();

export const Routers = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Messages" component={MessageSccreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}