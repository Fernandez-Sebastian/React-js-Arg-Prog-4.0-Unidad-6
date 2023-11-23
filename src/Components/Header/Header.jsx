import { Box, Flex, Text, Heading, IconButton,  VStack, useColorMode} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa'
import { FaUserLarge } from "react-icons/fa6";
import React from 'react';
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const modoOscuro = colorMode === "dark";
return(
    <VStack>
        <Box w="100%" position="fixed" zIndex="99">
            <Flex w="100%" alignItems="Center" justifyContent="space-between" bg="#438e96" color="white" h="60px"   p="5">
                <Flex direction="row">
                    <Heading  size="md" fontWeight="semibold" color="white" display="flex" alignItems="center" alignContent="center">
                        <Flex direction="row">
                            <FaUserLarge/>
                            <Text as="h3" textAlign="center" ml="10px"> Sign Up </Text>
                        </Flex>
                    </Heading>
                </Flex>
                <Flex>
                    <IconButton  ml="4" isRound='true' icon={modoOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#438e96" _hover={{ bg:"#92cace" }}></IconButton>
                </Flex>
            </Flex>
        </Box>
    </VStack>
)
}

export { Header }