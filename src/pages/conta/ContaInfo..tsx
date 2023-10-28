import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const ContaInfo =()=>{
    return(
        <>
            <Text paddingTop='60px' fontSize='3xl' fontWeight='bold'>
                Info da conta
            </Text>
            <Link to='/conta/2022'>
                <Text marginTop='70px' fontSize='xl' >
                    Conta
                </Text>
            </Link>
        </>
    )
}