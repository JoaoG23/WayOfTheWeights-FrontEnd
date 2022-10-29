import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login";
import AuthRedirect from "../../Pages/AuthRedirect";
import Registrarse from "../../Pages/Registrarse";

const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/auth" element={<AuthRedirect />}></Route>
      <Route path="/registrar" element={<Registrarse />} />
    </Routes>
  );
};

export default InicialRouters;
