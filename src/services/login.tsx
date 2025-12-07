import { api } from "../api";

interface UserData {
    email: string;
    senha: string;
}

export const login = async (email: string, senha: string): Promise<boolean> => {
    try {
        const data = await api as UserData;

        if (email !== data.email) return false;
        if (senha !== data.senha) return false;

        return true;
    } catch {
        return false;
    }
};
