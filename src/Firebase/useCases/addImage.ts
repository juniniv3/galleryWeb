import { addDoc, collection } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../Config";

export const addImage = async (image: {
  name: any;
  description: any;
  url: any;
}) => {
  try {
    const addedDoc =  await addDoc(collection(FirebaseFirestore, "images"), {
      name: image.name,
      description: image.description,
      url: image.url,
    });
    console.log("Document written with ID: ", addedDoc.id);
    return {
      ok: true,
      id: addedDoc.id,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error && "Error al eliminar las imagen",
    };
  }
};
