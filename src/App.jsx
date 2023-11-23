import './App.css'
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Footer } from './Components/Footer/Footer'
import { Formulario } from './Components/Formulario/Formulario'
import { Header } from './Components/Header/Header'

function App() {

  return (
    <>
    <ChakraProvider>
        <Header/>
        <Formulario/>
        <Footer/>
    </ChakraProvider>
    </>
  )
}

export default App
