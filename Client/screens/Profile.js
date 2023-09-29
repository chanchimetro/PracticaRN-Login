import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { userContext } from '../contexts/userContext';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

export default function ProfileScreen({ navigation }) {
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
                <Separator />
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
                    onPress={async () => setAlertText(await authServices.editProfile(nameText, surnameText, emailText, context, navigation))}
                />
                <Text>{alertText}</Text>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}