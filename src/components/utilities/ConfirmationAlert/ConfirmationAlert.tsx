import { useState, useEffect } from "react";

export interface ConfirmationAlertProps {
  label: string;
  description: string;
  onAccept: Function;
  onCancel: Function;
  visible: boolean;
}
export const ConfirmationAlert = ({
  label,
  description,
  onAccept,
  onCancel,
  visible,
}: ConfirmationAlertProps) => {
  const [showAlert, setShowAlert] = useState<boolean>(visible);

  useEffect(() => {
    setShowAlert(visible);
  }, [visible]);

  const clickOverlay = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (ev.target !== ev.currentTarget) {
      return;
    }
    setShowAlert(false);
  };
  return (
    <div
      onClick={clickOverlay}
      className={`${
        showAlert
          ? "overleyDisplayed fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center "
          : "hidden"
      }  
      `}
    >
      <div className="flex flex-col p-10 absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        {label && <h1 className="text-4xl min-w-96">{label}</h1>}
        {description && <p className="mt-6">{description}</p>}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => onAccept()}
            className="h-12  bg-primary text-white font-bold p-4"
          >
            Aceptar
          </button>
          <button
            onClick={() => onCancel()}
            className="h-12  bg-primary text-white font-bold p-4"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
