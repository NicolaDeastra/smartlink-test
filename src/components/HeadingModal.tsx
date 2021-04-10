import * as React from 'react'
import { useSelector } from 'react-redux'
import {
  Button,
  Divider,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

import { SelectSalary } from '@src/store/gaji'

interface HeadingModelProps {
  isOpen: boolean
  onClose: any
}

function HeadingModel({ isOpen, onClose }: HeadingModelProps) {
  const data = useSelector(SelectSalary)
  const [kehadiran, setKehadiran] = React.useState(data.total_kehadiran)

  const tambahKehadiran = () => {
    setKehadiran(() => kehadiran + 1)
  }

  const kurangKehadiran = () => {
    setKehadiran(() => kehadiran - 1)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size='sm'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mx='auto'>Ubah Kehadiran</ModalHeader>

        <ModalCloseButton color='blue.500' />
        <Divider />
        <ModalBody>
          <Stack>
            <Text color='gray.600'>Durasi keterlambanan</Text>
            <HStack spacing='0.3'>
              <IconButton
                aria-label='Plus'
                bg='white'
                color='black'
                borderRadius='0'
                border='1px'
                borderColor='gray.200'
                borderLeftRadius='2'
                onClick={tambahKehadiran}
                icon={<AddIcon />}
              />
              <Input
                borderRadius='0'
                w='16rem'
                px='6rem'
                value={`${kehadiran} Hari`}
              />

              <IconButton
                aria-label='Minus'
                bg='white'
                color='black'
                borderRadius='0'
                border='1px'
                borderColor='gray.200'
                borderRightRadius='2'
                onClick={kurangKehadiran}
                icon={<MinusIcon />}
              />
            </HStack>
          </Stack>
        </ModalBody>

        <ModalFooter mx='auto'>
          <Button
            borderRadius='2'
            colorScheme='red'
            mr={3}
            w='10rem'
            variant='outline'
            onClick={onClose}
          >
            Close
          </Button>
          <Button borderRadius='2' w='10rem' colorScheme='blue'>
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default HeadingModel
