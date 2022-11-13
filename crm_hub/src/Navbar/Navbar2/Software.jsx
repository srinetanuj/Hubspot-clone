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
 
import SoftwarePage from './SoftwarePage';
  

const Software = () => {
    const {isOpen,onOpen,onClose} = useDisclosure();
   
  return (
    <div>
      <Menu isOpen={isOpen} bg="gray.200">
      <MenuButton
        variant="ghost"
        mx={1}
        py={2}
        px={3}
        borderRadius={5}
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <Heading as="h3" size='md'>Software <ChevronDownIcon /></Heading> 
      </MenuButton>
      <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
        <MenuItem ><SoftwarePage/></MenuItem>
        
      </MenuList>
      
    </Menu>
    </div>
  )
}

export default Software
