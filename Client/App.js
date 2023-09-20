import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => (
  <View style={styles.separator} />
);

const login = async (user, pass) => {
  let r;
  await axios.post('http://localhost:3001/login', {
    user: user,
    pass: pass
  })
    .then(function (response) {
      console.log(response);
      r = response.data.message;
    })
    .catch(function (error) {
      r = error.response.data.message;
      console.log(error);
    });
  return r;
}

const register = async (user, pass) => {
  let r;
  await axios.post('http://localhost:3001/register', {
    user: user,
    pass: pass
  })
    .then(function (response) {
      console.log(response);
      r = response.data.message;
    })
    .catch(function (error) {
      r = error.response.data.message;
      console.log(error);
    });
  return r;
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.centeredCont}>
        <Button
          style={styles.button}
          title="Login"
          onPress={() => navigation.navigate('Login')}
        ></Button>
        <Separator />
        <Button
          style={styles.button}
          title="Register"
          onPress={() => navigation.navigate('Register')}
        ></Button>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function LoginScreen({ navigation }) {
  const [userText, onChangeUserText] = useState("");
  const [passText, onChangePassText] = useState("");
  const [alertText, setAlertText] = useState([""]);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.title}
      >
        Login
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={onChangeUserText}
        value={userText}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={onChangePassText}
        value={passText}
      />
      <Button
        style={styles.button}
        title="Login"
        onPress={async () => setAlertText(await login(userText, passText))}
      />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Register')}
      >
        No tengo cuenta
      </Text>
      <Separator />
      <Text>{alertText}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function RegisterScreen({ navigation }) {
  const [userText, onChangeUserText] = useState("");
  const [passText, onChangePassText] = useState("");
  const [alertText, setAlertText] = useState([""]);

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.title}
      >
        Register
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        onChangeText={onChangeUserText}
        value={userText}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={onChangePassText}
        value={passText}
      />
      <Button
        style={styles.button}
        title="Register"
        onPress={async () => setAlertText(await register(userText, passText))}
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
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    margin: 30,
    borderRadius: 4,
  },
  centeredCont: {
    padding: 15,
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 200,
    borderRadius: 4,
  },
  input: {
    borderRadius: 5,
    marginVertical: 12,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  link: {
    color: '#616161',
    marginTop: 8,
    textDecorationLine: 'underline'
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: 20
  }
});