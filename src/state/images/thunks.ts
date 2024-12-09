import { Dispatch } from "redux";
import { loadingImages, loadImagesSuccess, loadImagesError } from "./";
import { loadImages } from "../../Firebase/useCases";
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
