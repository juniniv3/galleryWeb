import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { loadImagesThunk } from "../../state/images";
import { ImageCard } from "./components/ImageCard/ImageCard";
import { ImageForm } from "./components/ImageForm/ImageForm";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const allImages = useAppSelector((state) => state.images);
  const [filteredImages, setFilteredImages] = useState<any[]>([]);
  console.log(allImages, filteredImages);
  const filterImages = (searchTerm: string) => {
    if (!searchTerm) {
      return allImages.images;
    }
    return allImages.images.filter(
      (image) =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  useEffect(() => {
    dispatch(loadImagesThunk());
  }, []);

  useEffect(() => {
    if (allImages.images.length > 0) {
      setFilteredImages(allImages.images);
    }
  }, [allImages]);

  return (
    <div>
      <input
        onKeyUp={(e) => {
          const searchTerm = e.currentTarget.value;
          clearTimeout((e.currentTarget as any).searchTimeout);
          (e.currentTarget as any).searchTimeout = setTimeout(() => {
            setFilteredImages(filterImages(searchTerm));
          }, 300);
        }}
        type="text"
        className="bg-white border-2 rounded-full p-2 pl-4 mb-8"
      ></input>
      <div className="grid grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <ImageCard
            key={image.id}
            id={image.id}
            name={image.name}
            description={image.description}
            url={image.url}
          ></ImageCard>
        ))}
      </div>

      <ImageForm></ImageForm>
    </div>
  );
};
