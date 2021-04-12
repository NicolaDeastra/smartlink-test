import {
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftAddon,
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
import { useSelector } from 'react-redux'
import { komisi } from '@src/store/gaji'

interface KomisiModalProps {
  isOpen: boolean
  onClose: () => void
  id?: string
}

function KomisiModal({ isOpen, onClose, id }: KomisiModalProps) {
  const dataKomisi = useSelector(komisi)
  const komisiById = dataKomisi.find((item) => item.id === id)

  return (
    <Modal onClose={onClose} size='md' isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mx='auto' fontSize='md'>
          Tambah / Ubah Komisi
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody px='8'>
          <Stack spacing='6'>
            <Stack>
              <Text color='gray.600'>Nama Komisi</Text>
              <Input
                borderRadius='sm'
                type='text'
                value={id && komisiById?.nama}
                placeholder='Nama Komisi'
              />
            </Stack>
            <InputGroup>
              <InputLeftAddon borderRadius='sm' children='Rp' bg='#f6f6f6' />
              <Input
                borderRadius='sm'
                type='text'
                value={id && komisiById?.nominal}
                placeholder='Nominal'
              />
            </InputGroup>
          </Stack>
        </ModalBody>
        <ModalFooter mx='auto'>
          <Button
            borderRadius='2'
            colorScheme='red'
            mr={3}
            w={['9rem', '11.5rem']}
            variant='outline'
          >
            Close
          </Button>
          <Button borderRadius='2' w={['9rem', '11.5rem']} colorScheme='blue'>
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default KomisiModal
