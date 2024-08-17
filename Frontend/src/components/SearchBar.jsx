import React from 'react';
import {
    IconButton, 
    Input, 
    InputGroup, 
    InputRightAddon
} from '@chakra-ui/react';
import { Search2Icon } from '@chakara-ui/icons';

export default function SearchBar({ onChange }) {
    return (
      <InputGroup borderRadius={10}>
        <Input
          name="search"
          type="text"
          bg="#F7FAFC"
          placeholder="Type to search"
          style={{textTransform: 'uppercase'}}
          border="none"
          borderRadius={10}
          onChange={onChange}
        />
      </InputGroup>
    );
  }