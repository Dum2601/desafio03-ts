import { Card } from './Card'
interface UserProps
{

    nome: string
    email: string

}

const UserInfoUser = ({nome, email}: UserProps) =>
{

    return (

        <>
        
            <Card>

                {nome}
                {email}

            </Card>

        </>

    )

}


export default UserInfoUser