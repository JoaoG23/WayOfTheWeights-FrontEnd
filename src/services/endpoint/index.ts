import axios from "axios";

import { buscaDadoUsuarioNaSessao } from "../buscaDadoUsuarioNaSessao";

const API_URL = process.env.REACT_APP_API_URL;

const { tokenSessao } = buscaDadoUsuarioNaSessao();
export const endpoint = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    "authorization-token": `${tokenSessao}`,
  },
});
