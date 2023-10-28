import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react"

interface IDButton{
    onClick: MouseEventHandler;
}

export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
            onClick={onClick}
            backgroundColor={'#9413dc'} 
            fontWeight={'600'} 
            margin={'20px 0'}
            color={'#fff'}
        >Entrar</Button>
    )
}