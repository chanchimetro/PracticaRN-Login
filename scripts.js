import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore, getDocs, collection, query, where, addDoc } from "firebase/firestore"
import { app } from "./firebaseConfig";

const auth = getAuth(app);

class authServices {
  static login = async (email, pass, context) => {
    let r;
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        pass
      );
      context.setUser(user);
      console.log(user);
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

  static logout = async () => {
    auth.signOut();
  };

  static fetchData = async (db, userUid) => {
    const perfilRef = collection(db, "users")
    const q = query(perfilRef, where("uid", "==", userUid));
    const data = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    } catch (error) {
      console.error(error);
    }
    return data;
  };

  static register = async (email, pass) => {
    let r;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
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

  static editProfile = async (username, name, surname, email, uid) => {
    let r;
    try {
      const db = getFirestore();
      await setDoc(doc(db, "users", uid), {
        username,
        name,
        surname,
        email,
        uid,
      });
      r = ({
        type: "success",
        text1: "Edicion exitosa",
        text2: "El perfil ha sido editado correctamente.",
      });
    } catch (error) {
      console.log(error);
      r = ({
        type: "error",
        text1: "Error",
        text2: "Ha ocurrido un error al editar el perfil.",
      });
    }
    return r;
  }
}

class thoughtServices {
  static fetchThoughts = async (db) => {
    const thoughtsRef = collection(db, "thoughts")
    const q = query(thoughtsRef);
    const data = [];
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    } catch (error) {
      console.error(error);
    }
    return data;
  };
  static postThought = async (post, email) => {
    let r;
    try {
      const db = getFirestore();
      await addDoc(collection(db, "thoughts"), {
        post,
        email
      });
      r = ({
        type: "success",
        text1: "Pensamiento compartido",
        text2: "",
      });
    } catch (error) {
      console.log(error);
      r = ({
        type: "error",
        text1: "Error",
        text2: "",
      });
    }
    return r;
  };
}

export {
  authServices,
  thoughtServices
}