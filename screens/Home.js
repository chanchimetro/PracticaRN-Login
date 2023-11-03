import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import { userContext } from '../contexts/userContext.js';
import { dbContext } from '../contexts/dbContext.js';
import Separator from '../Separator.js';
import styles from '../stylesheet.js';
import authServices from '../scripts.js';

const handleLogout = async (user, navigation) => {
  user.setUser({});
  await authServices.logout()
    .then(
      navigation.navigate('Menu')
    );
}

export default function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [completeProfile, setCompleteProfile] = useState(false);
  const user = useContext(userContext);
  const db = useContext(dbContext);


  useEffect(() => {
    const func = async () => {
      let r = await authServices.fetchData(db, user.user.uid);
      setProfile(r[0]);
      if (r.length > 0) setCompleteProfile(true);
      setIsLoading(false);
    }
    func();
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
                    Bienvenido! {profile.name} {profile.surname}!
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
              onPress={() => handleLogout(user, navigation)}
            ></Button>
          </>
        }
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}