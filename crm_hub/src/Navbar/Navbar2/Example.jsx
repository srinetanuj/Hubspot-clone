import React from 'react'

import {
    Menu,
    MenuButton,
    useColorModeValue,
    useDisclosure,
    MenuItem,
    MenuList,
   
} from "@chakra-ui/react"
import { ChevronDownIcon} from '@chakra-ui/icons'

const Example = () => {
   
    const {isOpen,onOpen,onClose} = useDisclosure();

  return (
    <>
       <Menu isOpen={isOpen}>
      <MenuButton
        variant="ghost"
        mx={1}
        py={[1, 2, 2]}
        px={4}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        English <ChevronDownIcon />
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem >Deutsch</MenuItem>
        <MenuItem >English</MenuItem>
        <MenuItem>Español</MenuItem>
        <MenuItem>Portugues</MenuItem>
        <MenuItem>Francais</MenuItem>
      </MenuList>
      
    </Menu>
    </>
  )
}

export default Example