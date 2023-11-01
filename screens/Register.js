import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

export default function RegisterScreen({ navigation }) {
    const [email, onChangeEmailText] = useState("");
    const [pass, onChangePassText] = useState("");
    const [name, onChangeNameText] = useState("");
    const [alertText, setAlertText] = useState([""]);
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centeredCont}>
          <Text
            style={styles.title}
          >
            Register
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            onChangeText={onChangeEmailText}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={onChangePassText}
            value={pass}
          />
          <TextInput
            style={styles.input}
            placeholder='Name'
            onChangeText={onChangeNameText}
            value={pass}
          />
          <Button
            style={styles.button}
            title="Register"
            onPress={async () => setAlertText(await authServices.register(userText, passText))}
          />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Login')}
          >
            Ya tengo cuenta
          </Text>
          <Separator />
          <Text>{alertText}</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }