import { Box, Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>(''); // Added password state
    const { setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login(email, senha);

        if (!loggedIn) {
            return alert('Email ou senha inválidos');
        }

        setIsLoggedIn(true);
        changeLocalStorage({ login: true });
        navigate('/conta/1');
    }

    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input 
                    placeholder="Email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                />
                <Input 
                    type="password"  // Password field
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(event) => setSenha(event.target.value)} 
                />
                <Center>
                    <DButton
                        onClick={() => validateUser(email, senha)}  // Pass both email and senha
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
