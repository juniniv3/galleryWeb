import { updateDoc, doc } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../Config";

export const updateImage = async (image: {
  id: string;
  name: any;
  description: any;
  url: any;
}) => {
  try {
    const updatedImage = await updateDoc(doc(FirebaseFirestore, "images", image.id), {
      name: image.name,
      description: image.description,
      url: image.url,
    });
    return {
      ok: true,
      image: updatedImage,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error && "Error al eliminar las imagen",
    };
  }
};
