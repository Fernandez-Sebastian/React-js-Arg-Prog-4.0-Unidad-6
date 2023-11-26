import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, FormControl, FormErrorMessage, FormLabel, Flex, IconButton, InputRightElement, InputGroup, Toast } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Card, CardBody } from '@chakra-ui/react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useToast } from '@chakra-ui/react'


// Se define el esquema de validación con Yup
const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('El campo Nombre es Obligatorio').min(3, 'El campo Nombre debe tener al menos 3 caracteres').max(9,'El campo Nombre debe tener como maximo 9 caracteres').matches(/^[a-zA-Z\s]+$/, 'El campo Nombre no debe contener caracteres especiales ni números'),
  apellido: Yup.string().required('El campo Apellido es Obligatorio').min(3, 'El campo Apellido debe tener al menos 3 caracteres').max(9,'El campo Apellido debe tener como maximo 9 caracteres').matches(/^[a-zA-Z\s]+$/, 'El campo Apellido no debe contener caracteres especiales ni números'),
  email: Yup.string().email('No es un email valido').required('Ingrese un email').min(10, 'El minimo es de 10 caracteres').matches(/^[a-zA-Z0-9][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'No es un email valido'),
  telefono: Yup.string().required('Ingrese un teléfono').matches(/^\d{10}$/,'Ingrese el número sin 0 y sin 15'),
  password: Yup.string().min(5, 'La contraseña debe tener al menos 5 caracteres').required('El campo Contraseña es Obligatorio').oneOf([Yup.ref("confirmarPassword")], "La contraseña no coincide (deben ser iguales con el campo Confirmar Password)"),
  confirmarPassword: Yup.string().min(5, 'La contraseña debe tener al menos 5 caracteres').required('Debe ingresar una contraseña').oneOf([Yup.ref("password")], "La contraseña no coincide (deben ser iguales con el campo Password)"),

});

    const Formulario = () => {

        const toast = useToast()

        const handleSubmit = (values) => {
            const promesa = new Promise((resolve, reject) => {
                setTimeout(() => resolve(200), 5000)
            })
    
            toast.promise(promesa, {
                loading: { title: 'Enviando Datos', description: 'Aguarde un instante' },
                success: { title: 'Datos Enviados', description: `${values.apellido} ${values.nombre} Confirme la cuenta siguiendo los pasos enviados a: ${values.email}` },
            })
        };
    

    // useState de los eventos para mostrar u ocultar la contraseña
    const [mostrarPassword,setmostrarPassword] = useState(false);
    const verContrasena=() =>setmostrarPassword(!mostrarPassword);

    const [mostrarConfPassword,setmostrarConfPassword] = useState(false);
    const verContrasenaPass=() =>setmostrarConfPassword(!mostrarConfPassword);
        
    return (
    <Flex justifyContent="center" w="100%"  minH="100vh" mt="70px" position="relative" alignItems="center">
        <Card variant="outline" h="fit-content">
        <CardBody>
            <Formik
            // se establece los valores iniciales de los campos

            initialValues={{ 
                    nombre: '', 
                    apellido: '',
                    email: '',
                    telefono: '',
                    password: '',
                    confirmarPassword: ''
                }}

                //solo valida al hacer click en el boton Enviar

                validationSchema={validationSchema}
                onSubmit={handleSubmit}

                // no valida en ningun cambio
                validateOnChange = {false}
                // no valida al salir de focus del input
                validateOnBlur = {false}

            >
        { 
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur,
                })=>( 
                <Form>
                    <Field name="nombre">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.nombre && form.touched.nombre}>
                            <FormLabel>Nombre</FormLabel>
                        <Input {...field} id="nombre" />
                        <FormErrorMessage>{form.errors.nombre}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="apellido">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.apellido && form.touched.apellido}>
                            <FormLabel>Apellido</FormLabel>
                        <Input {...field} id="apellido" />
                        <FormErrorMessage>{form.errors.apellido}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="email">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                        <FormLabel>Email</FormLabel>
                        <Input {...field} id="email" placeholder='ejemplo@ejemplo.com'/>
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="telefono">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.telefono && form.touched.telefono}>
                        <FormLabel>Telefono</FormLabel>
                        <Input {...field} id="telefono" placeholder='Ej: 2914744456'/>
                        <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="password">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input  {...field} type={mostrarPassword ? "text" : "password"}id="password"/>
                                <InputRightElement>
                                    <IconButton icon={!mostrarPassword ? <FaRegEye /> : <FaRegEyeSlash />} onClick={verContrasena} bg='transparent' _hover={{ bg:'transparent' }} tabIndex='-1'></IconButton>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="confirmarPassword">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.confirmarPassword && form.touched.confirmarPassword}>
                            <FormLabel>Confirmar Password</FormLabel>
                            <InputGroup>
                                <Input  {...field} type={mostrarConfPassword ? "text" : "password"}id="confirmarPassword"/>
                                <InputRightElement>
                                    <IconButton icon={!mostrarConfPassword ? <FaRegEye /> : <FaRegEyeSlash />} onClick={verContrasenaPass} bg='transparent' _hover={{ bg:'transparent' }} tabIndex='-1'></IconButton>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{form.errors.confirmarPassword}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                        <Flex  /* justifyContent="space-evenly" */ alignItems="center" >
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} w="fit-content" h="fit-content">
                                <Button mt={4} 
                                colorScheme='teal'
                                isLoading={false} type="submit">
                                Enviar
                                </Button>
                            </motion.div>
                        </Flex>
                </Form>
            )}
            </Formik>
        </CardBody>
        </Card>
    </Flex>
  );
};

export {Formulario};