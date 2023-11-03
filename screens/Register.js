import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

const handleRegister = (msg, navigation) => {
  //El componente Alert de React Native no funciona en web. Por eso utilizo alert(), ya que funciona en todas las plataformas. :)
  alert(msg.text1);
  if (msg.type == "success") setTimeout(() => navigation.navigate('Menu'), 3000);
}

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  
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
          <Button
            style={styles.button}
            title="Register"
            onPress={async () => handleRegister(await authServices.register(email, pass), navigation)}
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