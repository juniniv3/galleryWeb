import { useAppDispatch } from "../../hooks/reduxHooks";
import { loginThunk } from "../../state/auth";

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const submitEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const user = form.user.value;
    const password = form.password.value;
    dispatch(loginThunk(user, password));
  };
  return (
    <div className="flex h-full">
      <form onSubmit={submitEvent} className="flex flex-col m-auto p-10  bg-white">
        <h1 className="text-4xl min-w-96">Ingresar</h1>
        <label htmlFor="user" className="mt-6">Usuario</label>
        <input type="text" name="user" className="border-base border-2 p-1" />
        <label className="mt-2" htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          className="border-base border-2 p-1"
        />
        <button className="mt-8 h-12  bg-primary text-white font-bold" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};
