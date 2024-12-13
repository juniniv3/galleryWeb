import { addDoc, collection } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../Config";

export const addImage = async (image: {
  id: string;
  name: any;
  description: any;
  url: any;
}) => {
  try {
    await addDoc(collection(FirebaseFirestore, "images"), {
      name: image.name,
      description: image.description,
      url: image.url,
    });

    return {
      ok: true,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error && "Error al eliminar las imagen",
    };
  }
};
