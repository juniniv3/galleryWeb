import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { loadImagesThunk } from "../../state/images";
import { ImageCard } from "./components/ImageCard/ImageCard";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const imagesSelector = useAppSelector((state) => state.images);
  useEffect(() => {
    dispatch(loadImagesThunk());
  }, []);

  return (
    <div>

      <input type="text" className="bg-white border-2 rounded-full p-2 pl-4 mb-8" ></input>
      <div className="grid grid-cols-3 gap-6">
        {imagesSelector.images.map((image) => (
          <ImageCard
            key={image.id}
            name={image.name}
            description={image.description}
            url={image.url}
          ></ImageCard>
        ))}
      </div>
    </div>
  );
};
