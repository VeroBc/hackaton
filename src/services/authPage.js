import firebase from 'firebase';
import { auth } from './firebase';
import { setUser } from './backend';

export const AuthPage = () => {
  const provider = new firebase.auth.GoogleAuthProvider()

  const authWithGoogle = () => {
    firebase.auth().signInWithPopup(provider)
    .then(() => auth.currentUser)
    .then((currentUser) => {
      return setUser({
        uid: currentUser.uid,
        mail: currentUser.email,
        name: currentUser.displayName,
        photo: currentUser.photoURL,
      });
    })
    // .then(() => getCurrentUser())
    .then(() => {
      window.location = '/';
    })

  }

  return (
    <div>
      <button className="inputButton" onClick={authWithGoogle}>INGRESA CON GOOGLE</button>
      <button className="inputButton">INGRESA CON FACEBOOK</button>
      <button className="inputButton">INGRESA CON APPLE</button>
    </div>
  )

}