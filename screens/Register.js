import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

const handleRegister = (msg) => {
  Alert.alert(msg.text1, msg.text2, [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
  

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
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={setPass}
            value={pass}
          />
          <TextInput
            style={styles.input}
            placeholder='Name'
            onChangeText={setName}
            value={name}
          />
          <Button
            style={styles.button}
            title="Register"
            onPress={async () => handleRegister(await authServices.register(email, name, pass))}
          />
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Login')}
          >
            Ya tengo cuenta
          </Text>
          <Separator />
          <Text>ok</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    );
  }