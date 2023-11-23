import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView, Button, TextInput } from 'react-native';
import { userContext } from '../contexts/userContext.js';
import { dbContext } from '../contexts/dbContext.js';
import { thoughtServices } from '../scripts.js';
import Separator from '../Separator';
import styles from '../stylesheet.js';
import { useEffect, useState, useContext } from 'react';

const handlePost = (msg, navigation) => {
	alert(msg.text1);
	if (msg.type == "success") setTimeout(() => navigation.navigate('Home'), 1000);
}

export default function FeedScreen({ navigation }) {
	const [thoughts, setThoughts] = useState([]);
	const [post, setPost] = useState([]);
	const user = useContext(userContext);
	const db = useContext(dbContext);

	useEffect(() => {
		const func = async () => {
			console.log('user.user');
			console.log(user.user);
			setThoughts(await thoughtServices.fetchThoughts(db));
		}
		func();
	}, [])

	useEffect(() => {
		console.log('THOUGHTS');
		console.log(thoughts);
	}, [thoughts])

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={styles.centeredCont}>
				<TextInput
					style={styles.input}
					placeholder='En que estas pensando?'
					onChangeText={setPost}
					value={post}
				/>
				<Button
					style={styles.button}
					title="Post"
					onPress={async () => handlePost(await thoughtServices.postThought(post), navigation)}
				/>
				<Separator />
				{
					thoughts.length > 0 ?
						thoughts.map((t) => (
							<View
								style={styles.thought}>
								{t.post}
							</View>
						))
						: <></>
				}
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}