import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import logo from '../../assets/images/logo/logo2.png'

export const Header = () => {
    return(
        <>
            <Box bg='#e2e2e2' w='100%' h='60px' position='fixed' zIndex='101' color='white'>
                <Flex justifyContent='space-between' w='100%' alignItems='center' zIndex='102' padding='0 50px' h='100%' >
                    <Heading as={'h2'} fontSize='1.4rem' h='100%' fontWeight='700' marginTop='30px' color='black'>Vasco.NEXT</Heading>
                    <Image borderRadius='full' src={logo} boxSize='50px'/>
                </Flex>
                
            </Box>
        </>
    )
}