import { Card } from '../components/Card'
import UserInfoPage from '../components/UserInfoPage'

interface IUserInfo {
  nome: string
  email: string
}

const UserInfo = ({ nome, email }: IUserInfo) => {
  return (
    <Card>
      <UserInfoPage nome={nome} email={email} />
    </Card>
  )
}

export default UserInfo
