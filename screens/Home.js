import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import { userContext } from '../contexts/userContext.js';
import { dbContext } from '../contexts/dbContext.js';
import Separator from '../Separator.js';
import styles from '../stylesheet.js';

const handleLogout = (userContext, navigation) => {
  userContext.setUser({});
  navigation.navigate('Menu');
}

export default function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState(true);
  const [completeProfile, setCompleteProfile] = useState(true);
  const user = useContext(userContext);
  const db = useContext(dbContext);

  const perfilRef = collection(db, "perfil")
  const q = query(perfilRef, where("user_uid", "==", user.uid));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });
        console.log("data[0]:")
        console.log(data[0])
        setProfile(data[0])
        if (data.length > 0) setHasProfile(true)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredCont}>
        {
          isLoading ? <Text>Loading...</Text> : <> {
            completeProfile ?
              <>
                <View
                  style={styles.menuTitle}
                >
                  <Text
                    style={styles.title}
                  >
                    Bienvenido! {userContext.user.name} {userContext.user.surname}!
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
            <Separator />
            <Button
              style={styles.button}
              title="Cerrar Sesion"
              onPress={() => handleLogout(userContext, navigation)}
            ></Button>
          </>
        }
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}