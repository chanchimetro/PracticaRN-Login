import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Separator = () => (
  <View style={styles.separator} />
);

const login = async (user, pass, setAlertText) => {
  let r;

  try {
    await axios.post('http://localhost:3001/login', {
      user: user,
      pass: pass
    })
      .then(function (response) {
        r = response;
        setAlertText(r.response.data.message);
        console.log("HOME");
        setTimeout(
          navigation.navigate('Home', {
            user: user,
            pass: pass
          }), 10000
        );
      })
  } catch (error) {
    console.log(error);
  };
}

const register = async (user, pass) => {
  let r;
  await axios.post('http://localhost:3001/register', {
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
        onPress={() => login(userText, passText, setAlertText)}
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
        title="Login"
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

function HomeScreen({ route, navigation }) {
  const { user, pass } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.title}
      >
        feff
      </Text>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
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