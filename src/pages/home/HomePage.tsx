import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { loadImagesThunk } from "../../state/images";
import { ImageCard } from "./components/ImageCard/ImageCard";
import { ImageForm } from "./components/ImageForm/ImageForm";
import { ConfirmationAlert } from "../../components/utilities/ConfirmationAlert/ConfirmationAlert";
import { GlobalLoader } from "../../components/utilities/GlobalLoader/GlobalLoader";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const allImages = useAppSelector((state) => state.images);
  const loading = useAppSelector((state) => state.images.loading);
  const [showForm, setShowForm] = useState(false);
  const [filteredImages, setFilteredImages] = useState<any[]>([]);
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
      <button
        onClick={() => setShowForm(true)}
        className="mt-8 h-12  bg-primary text-white font-bold p-4 "
      >
        Add Image
      </button>
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

      {showForm && <ImageForm showForm={setShowForm}></ImageForm>}
      {
        <ConfirmationAlert
          label="Problema"
          description="asdad"
          onCancel={() => console.log(123)}
          onAccept={() => console.log(123)}
          visible={true}
        ></ConfirmationAlert>
      }
      {loading && <GlobalLoader></GlobalLoader>}
    </div>
  );
};
