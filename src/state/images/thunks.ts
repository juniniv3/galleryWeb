import { Dispatch } from "redux";
import {
  loadingImages,
  loadImagesSuccess,
  loadImagesError,
  deleteImageSuccess,
  updateImageSuccess,
} from "./";
import { deleteImage, loadImages, updateImage } from "../../Firebase/useCases";
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
