import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, 
    DrawerOverlay, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, 
    Stack, VStack, useColorMode, useDisclosure } from '@chakra-ui/react';
import {FaSun, FaMoon, FaUser, FaChevronDown, FaUserCircle } from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import React from 'react';
const Header = () => {
const { colorMode, toggleColorMode } = useColorMode();
const esOscuro = colorMode === "dark";
const { isOpen, onOpen, onClose } = useDisclosure()
const [placement, setPlacement] = React.useState('left')
return(
    <VStack>
        <Box w="100%" display={{sm:"none", md:"block"}} position="fixed" zIndex="99">
            <Flex w="100%" alignItems="Center" justifyContent="space-between" bg="#438e96" color="white" h="60px"   p="5">
                <Flex>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<FaChevronDown />} color="white" bg="#438e96" _hover={{  bg:"#92cace" }} _active={{ bg:"#438e96" }}>Categorias</MenuButton>
                        <MenuList bg="#438e96">
                            <MenuItem bg="#438e96" _hover={{ bg:"#92cace" }}>Sumar Numeros</MenuItem>
                            <MenuItem bg="#438e96" _hover={{ bg:"#92cace" }}>Apilar Numeros</MenuItem>
                            <MenuItem bg="#438e96" _hover={{ bg:"#92cace" }}>Restar Numeros</MenuItem>
                            <MenuItem bg="#438e96" _hover={{ bg:"#92cace" }}>Mas App</MenuItem>
                            <MenuItem bg="#438e96" _hover={{ bg:"#92cace" }}>Próximamente</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <Flex>
                    <IconButton  ml="2" isRound='true' icon={<FaUserCircle  />} color="white" bg="#438e96" _hover={{ bg:"#92cace" }}></IconButton>
                    <IconButton  ml="8" isRound='true' icon={esOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#438e96" _hover={{ bg:"#92cace" }}></IconButton>
                </Flex>
            </Flex>
        </Box>
        <Box w="100%" display={{sm:"block", md:"none"}} position="fixed" zIndex="99">
            <Flex w="100%" alignItems="Center" justifyContent="space-between" bg="#438e96" color="white" h="60px"   p={{base:"3", sm:"5"}}>
                <Button  as={IconButton} icon={<GiHamburgerMenu />} variant='outline'  color="white" bg="#438e96" _hover={{ bg:"#92cace" }} _active={{ bg:"#438e96" }} onClick={onOpen} paddingInline={{base:"4px"}}>
                    Menú
                </Button>
                <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerBody spacing="30px">
                            <Stack spacing="2" pt="5px">
                                <Menu>
                                    <MenuButton textAlign="left" _hover={{color:"#92cace"}}>Sumar Numeros</MenuButton>
                                    <MenuButton textAlign="left" _hover={{color:"#92cace"}}>Apilar Numeros</MenuButton>
                                    <MenuButton textAlign="left" _hover={{color:"#92cace"}}>Restar Numeros</MenuButton>
                                    <MenuButton textAlign="left" _hover={{color:"#92cace"}}>Mas App</MenuButton>
                                    <MenuButton textAlign="left" _hover={{color:"#92cace"}}>Próximamente</MenuButton>
                                </Menu>
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button  as={IconButton} aria-label='Options' icon= {<ImCross />} variant='outline'  color="white"   bg="#438e96" _hover={{ bg:"#438e96" }} _active={{ bg:"#438e96" }} onClick={onClose}>
                                Cerrar
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <Flex>
                    <IconButton  ml="2" isRound='true' icon={<FaUserCircle/>} color="white" bg="#438e96" _hover={{ bg:"#438e96" }}></IconButton>
                    <IconButton  ml={{base:"3", sm:"8"}} isRound='true' icon={esOscuro ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} color="white" bg="#438e96" _hover={{ bg:"#438e96" }}></IconButton>
                </Flex>
            </Flex>
        </Box>
    </VStack>
)
}

export { Header }