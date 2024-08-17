import React from 'react';
import SearchBar from './components/SearchBar.jsx'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    
    <ChakraProvider>
       <SearchBar />
    </ChakraProvider>
  );
}

export default App;