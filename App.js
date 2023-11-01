import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { userContext } from './contexts/userContext';
import HomeScreen from './screens/Home.js';
import ProfileScreen from './screens/Profile.js';
import MenuScreen from './screens/Menu.js';
import LoginScreen from './screens/Login.js';
import RegisterScreen from './screens/Register.js';

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