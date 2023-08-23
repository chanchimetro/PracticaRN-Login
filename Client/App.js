import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
const Separator = () => (
  <View style={styles.separator}/>
);

const login = async (user, pass) => {
  let r;
  axios.post('http://localhost:3000/login', {
    user: user,
    pass: pass
})
  .then(function (response) {
    console.log(response.data.message);
    r = response.data.message; 
  })
  .catch(function (error) {
    console.log(error);
  });
  return r;
}

export default function App() {

  const [userText, onChangeUserText] = useState("");
  const [passText, onChangePassText] = useState("");
  const [alertText, setAlertText] = useState([""]);

  return (
    <SafeAreaView style={styles.container}>
        <TextInput
          style = {styles.input}
          placeholder = 'ingrese texto'
          onChangeText = {onChangeUserText}
          value = {userText}
        />
        <TextInput
          style = {styles.input}
          placeholder = 'ingrese texto'
          onChangeText = {onChangePassText}
          value = {passText}
        />
        <Button
          style = {styles.button}
          title = "Login"
          onPress = {async () => setAlertText(await login(userText, passText))}
          />
        <Separator/>
          <Text>{alertText}</Text>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 30,
  },
  input: {
    marginVertical: 12,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  counter: {
    color: '#EE4B2B'
  }
});