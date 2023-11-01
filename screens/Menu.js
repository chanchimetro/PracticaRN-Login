import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Button } from 'react-native';
import Separator from '../Separator';
import styles from '../stylesheet.js';

export default function MenuScreen({ navigation }) {
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