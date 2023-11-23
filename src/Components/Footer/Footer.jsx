import { Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {FaLinkedinIn, FaSquareXTwitter, FaWikipediaW, FaInstagram} from 'react-icons/fa6';

const Footer = () => {
    return(
        <VStack bg="#325158" h="auto" w="100%" color="#F4F4F4" position="relative" bottom="0">
            <Flex bg="#2d464c" h="5px" w="100%"></Flex>
            <Flex h="auto" w="100%" direction={{base:"column",sm:"column", md:"row"}} pl={{sm:"5%", md:"0"}} paddingBlock="10px" justifyContent={{sm:"flex-start", md:"space-around"}} alignItems="center">
                <Flex flexDirection="column" width={{base:"90%", sm:"90%", md:"20%"}} mb={{base:"20px", sm:"20px", md:"0px"}} alignItems="center">
                    <Heading as='h4' mb="15px" size='md'>
                        Donde Encontrarnos
                    </Heading>
                    <Flex direction="row" justifyContent="space-between" w="200px">
                        <Text fontSize='md' cursor="pointer" _hover={{ color:"#92cace" }}><FaLinkedinIn/></Text>
                        <Text fontSize='md' cursor="pointer" _hover={{ color:"#92cace" }}><FaWikipediaW/> </Text>
                        <Text fontSize='md' cursor="pointer" _hover={{ color:"#92cace" }}><FaInstagram/> </Text>
                        <Text fontSize='md' cursor="pointer" _hover={{ color:"#92cace" }}><FaSquareXTwitter/> </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Divider borderColor="#2d464c"/>
            <Flex w="100%" alignItems="center" justifyContent="center" pb="10px">
                <Text fontSize='sm'>Copyrigth - All rigths reserved © 2024</Text>
            </Flex>
        </VStack>
    )
}

export { Footer }