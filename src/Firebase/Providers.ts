import {signInWithEmailAndPassword} from 'firebase/auth';
import {FirebaseAuth} from './Config';

export const singIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    return {
      ok: true,
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      profilePic: result.user.photoURL,
    };
  } catch (error) {
    return {ok: false, errorMessage: error && 'Error de autenticación'};
  }
};
