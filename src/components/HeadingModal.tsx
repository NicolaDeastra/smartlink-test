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

import { kehadiran } from '@src/store/gaji'

interface HeadingModelProps {
  isOpen: boolean
  onClose: () => void
}

function HeadingModel({ isOpen, onClose }: HeadingModelProps) {
  const hadir = useSelector(kehadiran)
  const [totalHadir, setTotalHadir] = React.useState(hadir)

  const tambahKehadiran = () => {
    setTotalHadir(() => totalHadir + 1)
  }

  const kurangKehadiran = () => {
    setTotalHadir(() => totalHadir - 1)
  }

  const handleClose = () => {
    setTotalHadir(() => hadir)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size='md'>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mx='auto'>Ubah Kehadiran</ModalHeader>

        <ModalCloseButton color='blue.500' />
        <Divider />
        <ModalBody>
          <Stack>
            <Text color='gray.600'>Durasi keterlambanan</Text>
            <HStack spacing='0.2'>
              <IconButton
                aria-label='Minus'
                bg='white'
                color='black'
                borderRadius='0'
                border='1px'
                borderColor='gray.200'
                borderLeftRadius='2'
                onClick={kurangKehadiran}
                icon={<MinusIcon />}
              />
              <Input
                borderRadius='0'
                w='20rem'
                px='7rem'
                value={`${totalHadir} Hari`}
              />

              <IconButton
                aria-label='Add'
                bg='white'
                color='black'
                borderRadius='0'
                border='1px'
                borderColor='gray.200'
                borderRightRadius='2'
                onClick={tambahKehadiran}
                icon={<AddIcon />}
              />
            </HStack>
          </Stack>
        </ModalBody>

        <ModalFooter mx='auto'>
          <Button
            borderRadius='2'
            colorScheme='red'
            mr={3}
            w='12rem'
            variant='outline'
            onClick={handleClose}
          >
            Close
          </Button>
          <Button borderRadius='2' w='12rem' colorScheme='blue'>
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default HeadingModel
