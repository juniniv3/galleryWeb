interface ImageCardProps {
  name: string;
  description: string;
  url: string;
}

export const ImageCard = ({ name, description, url }: ImageCardProps) => {
  return (
    <div className="flex  flex-col bg-white border rounded-lg">
      <img src={url} alt="" className="rounded-t-lg" />
      <div className="p-4">
        <p className="">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
