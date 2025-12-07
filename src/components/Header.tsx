import { Box, Button, Center, Flex, Spacer, Text, Link as ChakraLink } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'
import { AppContext } from './AppContext'

export const Header  = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({ login: false})
    setIsLoggedIn(false)
    navigate('/')
  }

  return(
    <Flex backgroundColor='orange' padding='5px' alignItems="center">
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>

      {isLoggedIn && (
        <>
          <Spacer />

          <ChakraLink 
            as={Link} 
            to="/userinfo" 
            marginRight="10px" 
            fontWeight="bold"
          >
            Meu Perfil
          </ChakraLink>

          <Button onClick={logout}>
            Sair
          </Button>
        </>
      )}
    </Flex>
  )
}
