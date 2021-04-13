import * as React from 'react'
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
import { useSelector, useDispatch } from 'react-redux'
import { komisi, addKomisi, editKomisi } from '@src/store/gaji'

interface KomisiModalProps {
  isOpen: boolean
  onClose: () => void
  id?: string
}

function KomisiModal({ isOpen, onClose, id }: KomisiModalProps) {
  const dataKomisi = useSelector(komisi)
  const komisiById = dataKomisi.find((item) => item.id === id)
  const dispatch = useDispatch()
  const [nama, setNama] = React.useState(komisiById ? komisiById.nama : '')
  const [nominal, setNominal] = React.useState(
    komisiById ? komisiById.nominal : 0
  )

  const saveNewKomisi = () => {
    if (nama && nominal) {
      dispatch(addKomisi(nama, nominal))
      handleClose()
    }
  }

  const handleEdit = () => {
    if (nama && nominal && id) {
      dispatch(editKomisi({ id, nama, nominal }))
    }
    onClose()
  }

  const handleClose = () => {
    setNama(() => (komisiById ? komisiById.nama : ''))
    setNominal(() => (komisiById ? komisiById.nominal : 0))
    onClose()
  }

  return (
    <Modal onClose={handleClose} size='md' isOpen={isOpen}>
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
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder='Nama Komisi'
              />
            </Stack>
            <InputGroup>
              <InputLeftAddon borderRadius='sm' children='Rp' bg='#f6f6f6' />
              <Input
                borderRadius='sm'
                type='text'
                value={nominal}
                onChange={(e) => setNominal(Number(e.target.value))}
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
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            borderRadius='2'
            w={['9rem', '11.5rem']}
            onClick={id ? handleEdit : saveNewKomisi}
            colorScheme='blue'
          >
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default KomisiModal
