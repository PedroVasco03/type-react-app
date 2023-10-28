import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string,
    content:string
}

export const CardInfo = ({mainContent, content}:ICardInfo) =>{
    return(
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={76}>
            <Box bg='white' padding={10} minHeight='120px' borderRadius='25px'>
                <Text fontSize='2xl' fontWeight='bold'> {mainContent} </Text>
                <Text fontSize='xl' > {content} </Text>
            </Box>
            </SimpleGrid>
        </Center>
    )
}