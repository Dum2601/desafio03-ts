import { login } from "../services/login";

describe('Login tests', () => {
    const mockEmail = 'nath@dio.bank';
    const mockSenha = 'senha123';

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail, mockSenha);
        expect(response).toBeTruthy();
    });

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido.com', mockSenha);
        expect(response).toBeFalsy();
    });
});
