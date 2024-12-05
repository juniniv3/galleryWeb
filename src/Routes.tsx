import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { LoginPage } from "./pages/login/LoginPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
