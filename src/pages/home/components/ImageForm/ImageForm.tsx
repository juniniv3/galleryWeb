import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { addImageThunk } from "../../../../state/images/thunks";

interface ImageFormProps {
  imageID?: string;
}

export const ImageForm = ({ imageID }: ImageFormProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name"></label>
      <input type="text" id="name" placeholder="Name" {...register("name")} />
      <label htmlFor="description"></label>
      <input
        type="text"
        id="description"
        placeholder="Description"
        {...register("description")}
      />
      <label htmlFor="url"></label>
      <input
        type="file"
        accept="image/*"
        id="url"
        placeholder="URL"
        {...register("url", { required: true })}
      />
      <button type="submit">Add Image </button>
    </form>
  );
};
