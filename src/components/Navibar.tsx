import { ReactNode, useState } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Tooltip
} from '@chakra-ui/react';
import {
  FiMenu,
  FiBell,
  FiChevronRight,
  FiMaximize,
  FiKey
} from 'react-icons/fi';

import { BiDish } from 'react-icons/bi';
import { MdOutlineFoodBank } from 'react-icons/md';

import { IconType } from 'react-icons';



import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';


interface LinkItemProps {
  name: string;
  icon: IconType;
  id: number;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Entrées', icon: FiChevronRight, id: 1 },
  { name: 'Main Courses', icon: FiChevronRight, id: 2 },
  { name: 'Deserts', icon: FiChevronRight, id: 3 },
  { name: 'break', icon: FiChevronRight, id: -1 },
  { name: 'Soft Drinks', icon: FiChevronRight, id: 4 },
  { name: 'Cocktails', icon: FiChevronRight, id: 5 },
  { name: 'Wine List', icon: FiChevronRight, id: 6 },
];

export default function SidebarWithHeader({ children, setCurrentPageId, displayOrder }: {
  children: ReactNode,
  setCurrentPageId: (value: number) => void,
  displayOrder: () => void
}) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" minW='100vw' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        changePageId={(value) => setCurrentPageId(value)}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent
            changePageId={(value: number) => setCurrentPageId(value)}
            onClose={onClose}
          />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} displayOrder={displayOrder} />
      <Box ml={{ base: 0, md: 60 }} p="4" textAlign={'left'}>
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
  changePageId: (value: number) => void;
}


const SidebarContent = ({ onClose, changePageId, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Ratatouille
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, index) => (
        link.name === "break" ? (<hr key={index} />) : (
          <NavItem onClick={() => {
            changePageId(link.id);
            onClose()
          }} key={index} icon={link.icon}>
            {link.name}
          </NavItem>)
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
  displayOrder: () => void;
}
const MobileNav = ({ onOpen, displayOrder, ...rest }: MobileProps) => {

  const [waiterCalled, setWaiterCalled] = useState<boolean>(false);

  const callTheWaiter = () => {
    if (waiterCalled) {
      Swal.fire({
        title: 'Waiter is already on the way',
        text: 'Please allow an extra minute',
        imageUrl: 'https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    } else {
      setWaiterCalled(true);
      Swal.fire({
        title: 'Waiter is on the way!',
        width: 600,
        padding: '3em',
        backdrop: `
        rgba(0,0,123,0.4)
        url("./public/nyan-cat.gif")
        left top
        no-repeat
      `
      })
    }
  }

  return (
    <Flex
      ml={{ base: 0 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      w="100%"
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Ratatouille
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Tooltip label="Call waiter" aria-label="Call waiter">
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="call waiter"
            onClick={() => callTheWaiter()}
            icon={<BiDish />}
          />
        </Tooltip>
        <Tooltip label="View Order" aria-label="View Order">
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="display order"
            onClick={displayOrder}
            icon={<MdOutlineFoodBank />}
          />
        </Tooltip>
      </HStack>
    </Flex>
  );
};