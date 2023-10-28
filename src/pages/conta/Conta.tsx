import { Box, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { CardInfo } from "../../components/CardInformacoes/CardInfo"
import { useState, useEffect } from "react"
import {useParams, useNavigate} from "react-router-dom"
import { api } from "../../API/api"

interface IUserData{
    id:string
    email:string
    password:string
    name:string
    balance:number
  }


export const Conta =()=>{
    const [userData,setUserData] = useState < null | IUserData>()


    useEffect(()=> {
        const getData = async () =>{
        const data: any | IUserData = await api
        setUserData(data)
        }

        getData()
    }, [])
    const actualData = new Date()
    
    const {id}= useParams()
    const navigate = useNavigate()

    if(userData && id !== userData.id){
        navigate('/')
    }
    return(
        <Box minHeight={'100vh'} backgroundColor={'#9413dc'} padding={'30px'}>
           <Center>
                <SimpleGrid display='flex' textAlign='center' justifyContent='center'  columns={2} spacing={8} paddingTop={76}>
                    {
                        userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size='xl' color='white'/>
                            </Center>
                        ):
                        (
                            <>
                                <CardInfo mainContent={`Bem vindo ${userData?.name}`} content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()}  ${actualData.getHours()}:${actualData.getMinutes()}`}/>
                                <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                            </>
                        )
                    }
                    
                </SimpleGrid>
            </Center> 
        </Box>
        
    )
}