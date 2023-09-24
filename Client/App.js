import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { userContext } from './contexts/userContext';
import styles from './stylesheet.js';

const Separator = () => (
  <View style={styles.separator} />
);

const login = async (user, pass, context, navigation) => {
  let r;
  await axios.post('http://localhost:3001/login', {
    user: user,
    pass: pass
  })
    .then(function (response) {
      console.log(response);
      context.setUser(response.data.data);
      r = response.data.message;
      setTimeout(() => navigation.navigate('Home'), 3000);
    })
    .catch(function (error) {
      r = error.response.data.message;
      console.log(error);
    });
  return r;
}

const register = async (user, pass, navigation) => {
  let r;
  await axios.post('http://localhost:3001/register', {
    user: user,
    pass: pass
  })
    .then(function (response) {
      console.log(response);
      r = response.data.message;
      setTimeout(() => navigation.navigate('Menu'), 3000);
    })
    .catch(function (error) {
      r = error.response.data.message;
      console.log(error);
    });
  return r;
}

const editProfile = async (name, surname, email, context, navigation) => {
  let r;
  await axios.put('http://localhost:3001/changeProfile', {
    username: context.user.username,
    name: name,
    surname: surname,
    email: email
  })
    .then(function (response) {
      console.log(response.data);
      context.setUser(response.data.data);
      r = response.data.message;
      setTimeout(() => navigation.navigate('Home'), 2000);
    })
    .catch(function (error) {
      r = error.response.data.message;
      console.log(error);
    });
  return r;
}

function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [completeProfile, setCompleteProfile] = useState(true);
  const context = useContext(userContext);

  useEffect(() => {
    let val = Object.values(context.user)
    val.forEach(e => {
      if (e === null) setCompleteProfile(false);
    });
    setIsLoading(false);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredCont}>
        {
          isLoading ? <Text>Loading...</Text> : completeProfile ?
            <>
              <View
                style={styles.menuTitle}
              >
                <Text
                  style={styles.title}
                >
                  Bienvenido! {context.user.name} {context.user.surname}!
                </Text>
              </View>
              <Separator />
              <Button
                style={styles.button}
                title="Edita tu perfil"
                onPress={() => navigation.navigate('Profile')}
              ></Button>
            </> :
            <>
              <View
                style={styles.menuTitle}
              >
                <Text
                  style={styles.title}
                >
                  Bienvenido!
                </Text>
              </View>
              <Separator />
              <Button
                style={styles.button}
                title="Completa tu perfil"
                onPress={() => navigation.navigate('Profile')}
              ></Button>
            </>
        }
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function ProfileScreen({ navigation }) {
  const context = useContext(userContext);

  const [alertText, setAlertText] = useState("");
  const [nameText, onChangeName] = useState(context.user.name);
  const [surnameText, onChangeSurname] = useState(context.user.surname);
  const [emailText, onChangeEmail] = useState(context.user.email);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.centeredCont}>
        <Text
          style={styles.title}
        >
          Editar perfil
        </Text>
        <Text><View style={styles.bold}>Username: </View>{context.user.username}</Text>
        <Separator/>
        <Text style={styles.bold}>Nombre: </Text>
        <TextInput
          style={styles.input}
          placeholder='Ingresa tu nombre'
          onChangeText={onChangeName}
          value={nameText}
        />
        <Text style={styles.bold}>Apellido: </Text>
        <TextInput
          style={styles.input}
          placeholder='Ingresa tu apellido'
          onChangeText={onChangeSurname}
          value={surnameText}
        />
        <Text style={styles.bold}>Email: </Text>
        <TextInput
          style={styles.input}
          placeholder='Ingresa tu email'
          onChangeText={onChangeEmail}
          value={emailText}
        />
        <Separator />
        <Button
          style={styles.button}
          title="Confirmar"
          onPress={async () => setAlertText(await editProfile(nameText, surnameText, emailText, context, navigation))}
        />
        <Text>{alertText}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function MenuScreen({ navigation }) {
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
  const context = useContext(userContext);

  useEffect(() => {
    console.log(context.user);
  }, [context.user])

  return (
    <SafeAreaView style={styles.centeredCont}>
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
        onPress={async () => setAlertText(await login(userText, passText, context, navigation))}
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
    <SafeAreaView style={styles.centeredCont}>
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
        onPress={async () => setAlertText(await register(userText, passText, navigation))}
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
  const [user, setUser] = useState({})
  return (
    <userContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={MenuScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </userContext.Provider>
  );
}