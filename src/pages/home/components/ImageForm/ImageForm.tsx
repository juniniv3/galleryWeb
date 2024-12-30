import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { addImageThunk } from "../../../../state/images/thunks";

interface ImageFormProps {
  imageID?: string;
  showForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageForm = ({ imageID , showForm }: ImageFormProps) => {

  const clickOverlay = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ev.target !== ev.currentTarget) {
      return;
    }
    showForm(false);
  }
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    if (!imageID) {
      dispatch(
        addImageThunk({
          name: data.name,
          description: data.description,
          file: data.url[0],
        })
      );
    }
    console.log(data);
  };
  return (

    <div onClick={clickOverlay}
    className="overleyDisplayed fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-10 absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
      >
        <label htmlFor="name" className="">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
          className="border-base border-2 p-1 mb-4"
        />
        <label htmlFor="description">Descripción</label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          {...register("description")}
          className="border-base border-2 p-1 mb-4"
        />
        <label htmlFor="url"></label>
        <input
          type="file"
          accept="image/*"
          id="url"
          placeholder="URL"
          {...register("url", { required: true })}
        />
        <button
          type="submit"
          className="mt-8 h-12  bg-primary text-white font-bold"
        >
          Agregar Imagen{" "}
        </button>
      </form>
    </div>
  );
};
