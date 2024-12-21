import { Dispatch } from "redux";
import {
  loadingImages,
  loadImagesSuccess,
  loadImagesError,
  deleteImageSuccess,
  updateImageSuccess,
  addImage,
} from "./";
import { deleteImage, loadImages, updateImage } from "../../Firebase/useCases";
import uploadImageFile from "../../Firebase/useCases/uploadImage";
import { addImage as addImageFirebase } from "../../Firebase/useCases/addImage";
export const loadImagesThunk = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingImages());
    const response = await loadImages();
    if (response.ok) {
      dispatch(loadImagesSuccess(response));
    } else {
      dispatch(
        loadImagesError({ errorMessage: "Error al cargar las imagenes" })
      );
    }
  };
};

export const deleteImageThunk = (imageId: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingImages());
    const response = await deleteImage(imageId);
    if (response.ok) {
      dispatch(deleteImageSuccess(imageId));
    } else {
      dispatch(loadImagesError({ errorMessage: "Error al eliminar imagen" }));
    }
  };
};

export const updateImageThunk = (image: {
  id: string;
  name: any;
  description: any;
  url: any;
}) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingImages());
    const response = await updateImage(image);
    if (response.ok) {
      dispatch(updateImageSuccess(response.image));
    } else {
      dispatch(loadImagesError({ errorMessage: "Error al actualizar imagen" }));
    }
  };
};

export const addImageThunk = (image: {
  name: string;
  description: string;
  file: File;
}) => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingImages());
    const responseUploadImage = await uploadImageFile(image.file);
    if (responseUploadImage.ok) {
      const responseAddImage = await addImageFirebase({
        name: image.name,
        description: image.description,
        url: responseUploadImage.downloadURL,
      });
      if (responseAddImage.ok) {
        dispatch(
          addImage({
            id: responseAddImage.id,
            name: image.name,
            description: image.description,
            url: responseUploadImage.downloadURL,
          })
        );
      } else {
        dispatch(loadImagesError({ errorMessage: "Error al crear imagen" }));
      }
    } else {
      dispatch(loadImagesError({ errorMessage: "Error al cargar imagen" }));
    }
  };
};
