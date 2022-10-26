import { Route, Routes } from "react-router-dom";
import Dashboard from '../../Pages/Dashboard'
import DeletarTreino from "../../Pages/DeletarTreino";
import Treinos from "../../Pages/Treinos";
import PrivateRoute from "../Auth/PrivateRouter";

const AdminRouters = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Treinos />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Treinos />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicios-treino/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Treinos />
          </PrivateRoute>
        }
      />
      {/* <Route
        path="/dashboard"
        element={<Dashboard />}
      /> */}
      <Route path="*" element={<h1> Not found the page 404</h1>} />
    </Routes>
  );
};

export default AdminRouters;
