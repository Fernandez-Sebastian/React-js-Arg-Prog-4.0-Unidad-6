import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { Input, Button, FormControl, FormErrorMessage, FormLabel, Flex, IconButton, InputRightElement, InputGroup } from '@chakra-ui/react';
import * as Yup from 'yup';
import { Card, CardBody } from '@chakra-ui/react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


// Se define el esquema de validación con Yup
const validationSchema = Yup.object().shape({
  nombre: Yup.string().required('El campo Nombre es Obligatorio').min(3, 'El campo Nombre debe tener al menos 3 caracteres').max(9,'El campo Nombre debe tener como maximo 9 caracteres').matches(/^[a-zA-Z\s]+$/, 'El campo Nombre no debe contener caracteres especiales ni números'),
  apellido: Yup.string().required('El campo Apellido es Obligatorio').min(3, 'El campo Apellido debe tener al menos 3 caracteres').max(9,'El campo Apellido debe tener como maximo 9 caracteres').matches(/^[a-zA-Z\s]+$/, 'El campo Apellido no debe contener caracteres especiales ni números'),
  email: Yup.string().email('Ingrese un correo electrónico válido').required('El campo Email es Obligatorio'),
  telefono: Yup.string().required('El campo Telefono es Obligatorio').min(8, 'El campo Telefono debe tener mas de 8 números').max(16,'El campo Telefono debe tener menos de 16 números ').matches(/^\+\d+$/, 'El campo Telefono debe comenzar con un + y luego contener solo números'),
  password: Yup.string().min(5, 'La contraseña debe tener al menos 5 caracteres').required('El campo Contraseña es Obligatorio').oneOf([Yup.ref("confirmarPassword")], "La contraseña no coincide"),
  confirmarPassword: Yup.string().min(5, 'La contraseña debe tener al menos 5 caracteres').required('Debe ingresar una contraseña').oneOf([Yup.ref("password")], "La contraseña no coincide"),

});

// Función para manejar la lógica de envío del formulario
const handleSubmit = (values, actions) => {

    console.log('Formulario enviado:', values);
    /* actions.setSubmitting(false); */
    };
    
    
    
    const Formulario = () => {
        const [mostrar,setMostrar] = useState(false);
    
        const verContraseña=() =>setMostrar(!mostrar);
        
  return (
    <Flex justifyContent="center" w="100%" mt="100px">
        <Card variant="outline" >
        <CardBody>
            <Formik
            // se establece los valores iniciales de los campos

            initialValues={{ 
                    nombre: '', 
                    apellido: '',
                    email: '',
                    telefno: '',
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
                        <Input {...field} id="nombre"  />
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
                        <Input {...field} id="email" placeholder='ejemplo@ejemplo.com' />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="telefono">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.telefono && form.touched.telefono}>
                        <FormLabel>Telefono</FormLabel>
                        <Input {...field} id="telefono" placeholder='Ej: +54222213313' />
                        <FormErrorMessage>{form.errors.telefono}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>

                    <Field name="password">
                    {({ field, form }) => (
                        <FormControl isInvalid={form.errors.password && form.touched.password}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input {...field} type="password" id="password" />
                                <InputRightElement>
                                    <IconButton icon={!mostrar ? <FaRegEye /> : <FaRegEyeSlash />} onClick={verContraseña} bg='transparent' _hover={{ bg:'transparent' }} tabIndex='-1'></IconButton>
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
                                <Input {...field} type="password" id="confirmarPassword" />
                                <InputRightElement>
                                    <IconButton icon={!mostrar ? <FaRegEye /> : <FaRegEyeSlash />} onClick={verContraseña} bg='transparent' _hover={{ bg:'transparent' }} tabIndex='-1'></IconButton>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{form.errors.confirmarPassword}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    
                    <Button mt={4} 
                    colorScheme='teal'
                    isLoading={false} type="submit">
                    Enviar
                    </Button>
            </Form>
            )}
            </Formik>
        </CardBody>
        </Card>
    </Flex>
  );
};

// Exporta el componente del formulario
export {Formulario};