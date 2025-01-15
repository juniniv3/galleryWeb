import { useState } from "react";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { deleteImageThunk } from "../../../../state/images";
import { ImageForm } from "../ImageForm/ImageForm";

interface ImageCardProps {
  name: string;
  description: string;
  url: string;
  id: string;
}

export const ImageCard = ({ name, description, url, id }: ImageCardProps) => {
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const deleteImage = () => {
    dispatch(deleteImageThunk(id));
  };

  const editImage = () => {
    setShowEditForm(true);
  };

  return (
    <>
      <div className="flex  flex-col bg-white border rounded-lg">
        <img src={url} alt="" className="rounded-t-lg" />
        <div className="p-4">
          <p className="">{name}</p>
          <p>{description}</p>
        </div>
        <div className="">
          <button>opciones</button>
          <button onClick={editImage}>Editar</button>
          <button onClick={deleteImage}>eliminar</button>
        </div>
      </div>
      {showEditForm && <ImageForm imageID={id} showForm={setShowEditForm} imageName={name} imageDescription={description} imageUrl={url} />}
    </>
  );
};
