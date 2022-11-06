import Phonebook from "../pages/Phonebook/Phonebook";
import { Routes, Route } from 'react-router-dom';
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/contacts" element={<Phonebook />} />
    </Routes>
  );
};
