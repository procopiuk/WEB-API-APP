import api from "../api";

export async function buscaUsuario(nome) {
    try {const resultado = await api.get(`/users?longin =${nome}`);
    return resultado.data[0];
    } catch (error) {console.log(error)};
} 