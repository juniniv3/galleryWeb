import { updateDoc, doc } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../Config";

export const updateImage = async (image: {
  id: string;
  name: any;
  description: any;
  url: string | undefined;
}) => {
  try {
    await updateDoc(doc(FirebaseFirestore, "images", image.id), {
      name: image.name,
      description: image.description,
      url: image.url,
    });
    return {
      ok: true,
      image,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error && "Error al eliminar las imagen",
    };
  }
};
