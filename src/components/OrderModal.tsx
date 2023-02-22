import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text, Input } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useEffect, useState } from "react";
import { Dish } from "../menuItems/AllDishes";

import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai'

import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react';
import './OrderModal.css';

export default function OrderModal({ orderedItems, isOpen, onOpen, onClose, addToOrder }: {
  orderedItems: Dish[],
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  addToOrder: (dish: Dish) => void
}) {

  const [total, setTotal] = useState<number>();


  const [errorInPassword, setErrorInPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  enum ModalState {
    Normal,
    EnterCode,
    CodeGenerated
  }

  const [modalState, setModalState] = useState<ModalState>(ModalState.Normal);

  if (orderedItems.length === 0) {
    onClose();
    return null;
  }

  useEffect(() => {
    setTotal(orderedItems.reduce((acc, dish) => acc + dish.price, 0));
  }, [orderedItems.length])

  const generateCode = () => {
    setModalState(ModalState.EnterCode);
  }

  const checkPassword = () => {
    if (password === '1234') {
      setErrorInPassword(false);
      setModalState(ModalState.CodeGenerated);
    } else {
      setErrorInPassword(true);
    }

  }

  const normalContent = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Your order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TableContainer>
            <Table variant='simple' layout={'fixed'} whiteSpace={'normal'}>
              <Tbody>
                {orderedItems.map((dish, key) => {
                  return (
                    <Tr key={key}>
                      <Td width='60%'>{dish.name}</Td>
                      <Td>${dish.price}</Td>
                      <Td width='10%'><a href="#" onClick={() => addToOrder(dish)}>X</a></Td>
                    </Tr>
                  )
                })
                }
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total</Th>
                  <Th>${total}</Th>
                  <Th></Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='gray' mr={3} onClick={generateCode}>
            <AiOutlineLock />
          </Button>
          <Button colorScheme='gray' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

  const enterCode = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please enter code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input 
            type={'password'} 
            className={errorInPassword ? 'error' : undefined}
            onChange={(e) => setPassword(e.target.value)}
            ></Input>
            {errorInPassword && <Text>Password not recognised</Text>}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='gray' mr={3} onClick={checkPassword}>
            <AiOutlineUnlock />
          </Button>
          <Button colorScheme='gray' mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

  const generatedCode = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Scan the code</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
         <QRCodeCanvas value={
            JSON.stringify({
              items: orderedItems,
              total: total
            })
         } />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='gray' mr={3} onClick={onClose}>
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

  return (
    modalState === ModalState.Normal ? normalContent : modalState === ModalState.EnterCode ? enterCode : generatedCode
  )
}