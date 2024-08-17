import React from 'react';
import {
    IconButton, 
    Input, 
    InputGroup, 
    InputRightAddon,
    Box,
    InputRightElement
} from '@chakra-ui/react';

export default function SearchBar({ onChange }) {
    return (
      <InputGroup 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        borderRadius={10}
      >
        <Input
          name="search"
          type="text"
          bg="#F7FAFC"
          placeholder="Type to search"
          style={{textTransform: 'uppercase'}}
          border="none"
          borderRadius={10}
          w='80%'
          onChange={onChange}
          pr="4.5rem"
        />
      </InputGroup>
    );
  }