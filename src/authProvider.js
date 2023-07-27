import {
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from "react-admin";
import firebase from "firebase/compat/app";

const db = firebase.firestore();

export const firebaseAuthProvider = (type, params) => {
  if (type === AUTH_LOGIN) {
    const { email, password } = params;
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        throw new Error({ message: error.message, status: 401 });
      });
  }

  if (type === AUTH_LOGOUT) {
    return firebase
      .auth()
      .signOut()
      .catch((error) => {
        throw new Error({ message: error.message, status: 500 });
      });
  }

  if (type === AUTH_CHECK) {
    return firebase.auth().currentUser ? Promise.resolve() : Promise.reject();
  }

  if (type === AUTH_GET_PERMISSIONS) {
    // Try to find a "user" collection and return the role attribute
    return db
      .collection("users")
      .doc(firebase.auth().currentUser)
      .then((doc) => {
        if (doc.exists) {
          return doc.data().role;
        } else {
          return "users";
        }
      })
      .catch((error) => {
        return "users";
      });
  }

  return Promise.resolve();
};
