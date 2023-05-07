/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {  ChatListItem } from  './src/components';
import { ChatView, MessageView } from './src/view';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.globalContainer}>
      {/* <ChatListItem chat={chats} /> */}
      
      {/* <ChatView /> */}

      <MessageView />

      
    </View>
  );
}

const styles = StyleSheet.create({

  globalContainer: {
    flex:1,
    // alignItems: 'center',
    justifyContent:'center'
  },

});

export default App;
