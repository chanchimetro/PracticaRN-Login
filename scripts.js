import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"
import { app } from "./firebaseConfig";

let url = "http://localhost:3001/"
const auth = getAuth(app);

export default class authServices {
  static login = async (email, pass, context) => {
    let r;
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );
      context.setUser(user);
      r = {
        type: "success",
        text1: "Inicio de sesion exitoso",
        text2: "La sesion a iniciado correctamente.",
      };
    } catch (error) {
      console.log(error);
      r = {
        type: "error",
        text1: "Error",
        text2: "Ha ocurrido un error al iniciar sesion.",
      };
    }
    return r;
  };

  static register = async (email, pass) => {
    let r;
    let name = "";
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      const { uid } = user;
      const db = getFirestore();
      await setDoc(doc(db, "users", uid), {
        name,
        email,
        uid,
      });
      r = {
        type: "success",
        text1: "Registro exitoso",
        text2: "El usuario ha sido creado correctamente.",
      };
    } catch (error) {
      console.log(error);
      r = {
        type: "error",
        text1: "Error",
        text2: "Ha ocurrido un error al crear el usuario.",
      };
    }
    return r;
  };

  static editProfile = async (name, surname, email, context, navigation) => {
    let r;
    await axios.put('http://localhost:3001/changeProfile', {
      username: context.user.username,
      name: name,
      surname: surname,
      email: email
    })
      .then(function (response) {
        console.log(response.data);
        context.setUser(response.data.data);
        r = response.data.message;
        setTimeout(() => navigation.navigate('Home'), 2000);
      })
      .catch(function (error) {
        r = error.response.data.message;
        console.log(error);
      });
    return r;
  }
}