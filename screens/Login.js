import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { userContext } from '../contexts/userContext';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

const handleLogin = (msg, navigation) => {
	//El componente Alert de React Native no funciona en web. Por eso utilizo alert(), ya que funciona en todas las plataformas. :)
	alert(msg.text1);
	if (msg.type == "success") setTimeout(() => navigation.navigate('Home'), 1000);
}

export default function LoginScreen({ navigation }) {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
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
					title="Login"
					onPress={async () => handleLogin(await authServices.login(email, pass, context), navigation)}
				/>
				<Text
					style={styles.link}
					onPress={() => navigation.navigate('Register')}
				>
					No tengo cuenta
				</Text>
				<Separator />
				<Text>ok</Text>
				<StatusBar style="auto" />
			</View>
		</SafeAreaView>
	);
}