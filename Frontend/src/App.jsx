import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    
    <ChakraProvider>
      <NavBar />
      {/* <SearchBar /> */}
    </ChakraProvider>
  );
}

export default App;