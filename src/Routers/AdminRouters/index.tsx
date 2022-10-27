import { Route, Routes } from "react-router-dom";
import AdicionarTreino from "../../Pages/AdicionarTreino";
import Dashboard from '../../Pages/Dashboard'
import DeletarTreino from "../../Pages/DeletarTreino";
import EditarTreino from "../../Pages/EditarTreino";
import Exercicio from "../../Pages/Exercicio";
import ExerciciosDoTreino from "../../Pages/ExerciciosDoTreino";
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
        path="/treino/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarTreino />
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
            <ExerciciosDoTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <ExerciciosDoTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Exercicio />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <ExerciciosDoTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <ExerciciosDoTreino />
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
