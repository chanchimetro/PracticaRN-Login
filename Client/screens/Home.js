import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Text, View, SafeAreaView, Button } from 'react-native';
import { userContext } from '../contexts/userContext.js';
import styles from '../stylesheet.js';

const handleLogout = (context, navigation) => {
    context.setUser({});
    navigation.navigate('Menu');
  }

export default function HomeScreen({ navigation }) {
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
            isLoading ? <Text>Loading...</Text> : <> {
              completeProfile ?
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
            <Separator/>
              <Button
                style={styles.button}
                title="Cerrar Sesion"
                onPress={() => handleLogout(context, navigation)}
              ></Button>
            </>
          }
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }