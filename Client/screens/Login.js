import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { userContext } from '../contexts/userContext';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

export default function LoginScreen({ navigation }) {
    const [userText, onChangeUserText] = useState("");
    const [passText, onChangePassText] = useState("");
    const [alertText, setAlertText] = useState([""]);
    const context = useContext(userContext);

    useEffect(() => {
        console.log(context.user);
    }, [context.user])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredCont}>
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
                    onPress={async () => setAlertText(await authServices.login(userText, passText, context, navigation))}
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
            </View>
        </SafeAreaView>
    );
}