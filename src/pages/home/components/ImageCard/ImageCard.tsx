import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { deleteImageThunk } from "../../../../state/images";

interface ImageCardProps {
  name: string;
  description: string;
  url: string;
  id: string;
}

export const ImageCard = ({ name, description, url, id }: ImageCardProps) => {
  const dispatch = useAppDispatch();

  const deleteImage = () => {
    dispatch(deleteImageThunk(id));
  };

  return (
    <div className="flex  flex-col bg-white border rounded-lg">
      <img src={url} alt="" className="rounded-t-lg" />
      <div className="p-4">
        <p className="">{name}</p>
        <p>{description}</p>
      </div>
      <div className="">
        <button>opciones</button>
        <button onClick={deleteImage}>eliminar</button>
        <button>editar</button>
        <button onClick={deleteImage}>eliminar</button>
      </div>
    </div>
  );
};
