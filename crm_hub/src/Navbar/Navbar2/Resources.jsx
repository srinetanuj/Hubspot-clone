import { 
    Menu,
      MenuButton,
      useColorModeValue,
      useDisclosure,
      MenuItem,
      MenuList,
      Heading
  } from '@chakra-ui/react';
  import { ChevronDownIcon} from '@chakra-ui/icons'
  import { Link} from "react-router-dom";
  
const Resources = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <div>
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
        <Heading as="h3" size='md'>Resources <ChevronDownIcon /></Heading> 
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem >About Us</MenuItem>
        
      </MenuList>
      
    </Menu>
    </div>
  )
}

export default Resources
