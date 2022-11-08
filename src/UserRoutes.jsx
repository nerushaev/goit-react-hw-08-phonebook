import Phonebook from "./pages/Phonebook/Phonebook";
import { Routes, Route } from 'react-router-dom';
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
import PrivateRoute from "components/Phonebook/PrivateRoute/PrivateRoute";
import PublicRoute from 'components/Phonebook/PublicRoute/PublicRoute';

export default function userRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoute />} />
        <Route path="/contacts" element={<Phonebook />} />
    </Routes>
  )
}
