import { deleteDoc, doc } from "firebase/firestore/lite";
import { FirebaseFirestore } from "../Config";

export const deleteImage = async (id: string) => {
  try {
    await deleteDoc(doc(FirebaseFirestore, "images", id));
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
