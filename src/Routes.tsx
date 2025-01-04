import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { LoginPage } from "./pages/login/LoginPage";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { useEffect } from "react";
import { FirebaseAuth } from "./Firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "./state/auth";
import { HomePage } from "./pages/home/HomePage";

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
        {authSelector.status === "authenticated" ? (
          <Route path="/*" element={<HomePage />} />
        ) : (
          <Route path="/auth/login" element={<LoginPage />} />
        )}
        {authSelector.status === "authenticated" && (
          <Route path="/auth/login" element={<Navigate to="/"></Navigate>} />
        )}
        {authSelector.status === "unauthenticated" && (
          <Route path="/*" element={<Navigate to="/auth/login"></Navigate>} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
