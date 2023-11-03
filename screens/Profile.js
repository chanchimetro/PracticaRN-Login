import { StatusBar } from 'expo-status-bar';
import { useContext, useState, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { userContext } from '../contexts/userContext';
import { dbContext } from '../contexts/dbContext';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

const handleEditProfile = (msg, navigation) => {
	//El componente Alert de React Native no funciona en web. Por eso utilizo alert(), ya que funciona en todas las plataformas. :)
	alert(msg.text1);
	if (msg.type == "success") setTimeout(() => navigation.navigate('Home'), 1000);
}

export default function ProfileScreen({ navigation }) {
	const [isLoading, setIsLoading] = useState(true);
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [email, setEmail] = useState("");
	const user = useContext(userContext);
	const db = useContext(dbContext);

	useEffect(() => {
		const func = async () => {
			let r = await authServices.fetchData(db, user.user.uid);
			if (r.length > 0) {
				await setUsername(r[0].username);
				await setName(r[0].name);
				await setSurname(r[0].surname);
				await setEmail(r[0].email);
			};
			setIsLoading(false);
		}
		func();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={styles.centeredCont}>
					{isLoading ? <Text>Loading...</Text> : <>
						<Text
							style={styles.title}
						>
							Editar perfil
						</Text>
						<Text><View style={styles.bold}>E-Mail: </View>{email}</Text>
						<Separator />
						<Text style={styles.bold}>Nombre de Usuario: </Text>
						<TextInput
							style={styles.input}
							placeholder='Ingresa tu nombre de usuario'
							onChangeText={setUsername}
							value={username}
						/>
						<Text style={styles.bold}>Nombre: </Text>
						<TextInput
							style={styles.input}
							placeholder='Ingresa tu nombre'
							onChangeText={setName}
							value={name}
						/>
						<Text style={styles.bold}>Apellido: </Text>
						<TextInput
							style={styles.input}
							placeholder='Ingresa tu apellido'
							onChangeText={setSurname}
							value={surname}
						/>
						<Separator />
						<Button
							style={styles.button}
							title="Confirmar"
							onPress={async () => handleEditProfile(await authServices.editProfile(username, name, surname, email, user.user.uid), navigation)}
						/>
						<Text>ok</Text>
					</>
					}
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}