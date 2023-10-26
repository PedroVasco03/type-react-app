import I from './ICard'
import { Container, Flex, Divider, Card, Image, CardBody, Heading, Text, Stack, Button, CardFooter, ButtonGroup } from '@chakra-ui/react'

const Cards=() => {
    return(
        <Card maxW='sm'margin='20px 0' >
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md' color='black'>Living room Sofa</Heading>
                <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    $505
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Comprar Agora
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Adicionar ao Carrinho
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
    )
}

export default Cards;