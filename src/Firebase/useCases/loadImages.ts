import {collection, getDocs} from 'firebase/firestore/lite';
import {FirebaseFirestore} from '../Config';

export const loadImages = async () => {
  try {
    const collectionRef = await collection(FirebaseFirestore, 'images');
    const querySnapshot = await getDocs(collectionRef);
    return {
      ok: true,
      data: querySnapshot.docs.map(doc => doc.data()),
    };
  } catch (error) {
    return {
      ok: false,
      data: [],
      errorMessage: error && 'Error al cargar las imágenes',
    };
  }
};
