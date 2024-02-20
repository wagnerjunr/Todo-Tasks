import { Heading,Box,Text,Button, HStack } from "@chakra-ui/react";
import '../style/layout.css'

function Navbar(){
    return (
        <div className="navbar">
            <Heading>Todo Tasks</Heading>
            
            <HStack className="user" spacing="20px">
                <Box className = "box_user" bg = "purple.400" >M</Box>
                <Text>WagnerAparecidojr@gmail.com</Text>
                <Button bg = "purple.400" color = "white">Logout</Button>
            </HStack>
        </div>
    )
}

export default Navbar;