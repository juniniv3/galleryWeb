import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FirebaseStorage } from "../Config";

const uploadImageFile = async (file: File): Promise<any> => {
  try {
    const uniqueFileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(FirebaseStorage, `images/${uniqueFileName}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return {
      ok: true,
      downloadURL,
    };
  } catch (error) {
    console.error("Error uploading image: ", error);
    return {
      ok: false,
      errorMessage: "Error al subir la imagen",
    };
  }
};

export default uploadImageFile;
