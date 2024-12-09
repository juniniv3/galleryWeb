import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import { LoginPage } from "./pages/login/LoginPage";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { useEffect } from "react";
import { FirebaseAuth } from "./Firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./state/auth";

export const Routing = () => {
  const authSelector = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          login({
            errorMessage: null,
            profilePic: null,
            uid,
            email,
            displayName,
          })
        );
      } else {
        dispatch(logout({ errorMessage: null }));
      }
    });
  }, []);

  if (authSelector.status === "checking") {
    return <div>loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
