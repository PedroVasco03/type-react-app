import { Flex,  Card,  Image, CardBody, Heading, Text, Stack, Button, CardFooter } from '@chakra-ui/react'
import logo from '../../assets/images/logo/logo2.png'
import Cards from '../Card/Cards'


export const ContainerHome = ()=>{
    return(
        <>
                <Flex flexDirection='column' width='100%'  minHeight='100vh'>
                    <Flex flexDirection='row' marginTop='60px' width='100%' justifyContent='center' >
                        
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        justifyContent='center'
                        bg='transparent'
                        width='100%'
                        height='270px'
                        margin='20px 0'
                        >
                        <Image
                            objectFit='cover'
                            src={logo}
                            alt='Next'
                            margin='0 10px'
                        />

                        <Stack width='40%' bg='#9413dc' color='#fff' borderRadius='15px'>
                            <CardBody>
                            <Heading size='md'>Vasco.NEXT</Heading>

                            <Text py='2'>
                                A proxima geração da moda está aqui, tudo que precisas encontras conosco, somos o futuro da moda Africana, Vasco.NEXT, eis a qualidade que gera confiança
                            </Text>
                            </CardBody>

                            <CardFooter>
                            <Button variant='solid' colorScheme='blue' onClick={sucesso}>
                                clique aqui
                            </Button>
                            </CardFooter>
                        </Stack>
                        </Card>
                    </Flex>

                    <Flex flexDirection='row' flexWrap='wrap' justifyContent='center'>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </Flex>
                </Flex>
        </>
    )
}

function sucesso(){
    alert("Seja bem vindo")
}