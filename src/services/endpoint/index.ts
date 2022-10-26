import axios from 'axios';

import { buscaDadoUsuarioNaSessao } from '../buscaDadoUsuarioNaSessao';

const { tokenSessao } = buscaDadoUsuarioNaSessao();
export const endpoint = axios.create({
    baseURL: "https://way-of-the-weights-api.vercel.app",
    headers: {
      "Content-type": "application/json",
      'authorization-token':`${tokenSessao}`
    },
});
