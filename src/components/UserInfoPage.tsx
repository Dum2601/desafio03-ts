import { Box } from '@chakra-ui/react'
interface UserProps
{

    nome: string
    email: string

}

const UserInfoUser = ({nome, email}: UserProps) =>
{

    return (

        <>
        
            <Box>

                {nome}
                {email}

            </Box>

        </>

    )

}


export default UserInfoUser