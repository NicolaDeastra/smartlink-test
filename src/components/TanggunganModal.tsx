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
import { tanggungan, addTanggungan, editTanggungan } from '@src/store/gaji'

interface TanggunganModalProps {
  isOpen: boolean
  onClose: () => void
  id?: string
}

function TanggunganModal({ isOpen, onClose, id }: TanggunganModalProps) {
  const dataTanggunan = useSelector(tanggungan)
  const tanggunganById = dataTanggunan.find((item) => item.id === id)
  const dispatch = useDispatch()

  const [nama, setNama] = React.useState(
    tanggunganById ? tanggunganById.nama : ''
  )
  const [nominal, setNominal] = React.useState(
    tanggunganById ? tanggunganById.nominal : 0
  )
  const [ket, setKet] = React.useState(tanggunganById ? tanggunganById.ket : '')

  const handleClose = () => {
    setNama(() => (tanggunganById ? tanggunganById.nama : ''))
    setKet(() => (tanggunganById ? tanggunganById.ket : ''))
    setNominal(() => (tanggunganById ? tanggunganById.nominal : 0))
    onClose()
  }

  const handleSave = () => {
    if (nama && nominal && ket) {
      dispatch(addTanggungan(nama, ket, nominal))
      handleClose()
    }
  }

  const handleEdit = () => {
    if (id && nama && ket && nominal) {
      dispatch(editTanggungan({ id, nama, ket, nominal }))
      handleClose()
    }
  }

  return (
    <Modal onClose={handleClose} size='md' isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mx='auto' fontSize='md'>
          Bayar Tanggungan / Denda
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody px='8'>
          <Stack spacing='6'>
            <Stack>
              <Text color='gray.600'>Nama Tanggungan</Text>
              <Input
                borderRadius='sm'
                type='text'
                placeholder='Contoh: Ganti Barang Hilang'
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </Stack>
            <Stack>
              <Text color='gray.600'>Nominal Pembayaran</Text>
              <InputGroup>
                <InputLeftAddon borderRadius='sm' children='Rp' bg='#f6f6f6' />
                <Input
                  borderRadius='sm'
                  type='number'
                  placeholder='Nominal'
                  value={nominal}
                  onChange={(e) => setNominal(Number(e.target.value))}
                />
              </InputGroup>
            </Stack>
            <Stack>
              <Text color='gray.600'>Keterangan</Text>
              <Input
                borderRadius='sm'
                value={ket}
                type='text'
                onChange={(e) => setKet(e.target.value)}
                placeholder='Contoh: Baju yang hilang warna merah'
              />
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter mx='auto'>
          <Button
            borderRadius='2'
            colorScheme='red'
            mr={3}
            w={['9rem', '11.5rem']}
            onClick={handleClose}
            variant='outline'
          >
            Close
          </Button>
          <Button
            borderRadius='2'
            w={['9rem', '11.5rem']}
            onClick={id ? handleEdit : handleSave}
            colorScheme='blue'
          >
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TanggunganModal
