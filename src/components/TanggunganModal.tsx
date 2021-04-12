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
import { tanggungan } from '@src/store/gaji'

interface TanggunganModalProps {
  isOpen: boolean
  onClose: () => void
  id?: string
}

function TanggunganModal({ isOpen, onClose, id }: TanggunganModalProps) {
  const dataTanggunan = useSelector(tanggungan)
  const tanggunganById = dataTanggunan.find((item) => item.id === id)

  return (
    <Modal onClose={onClose} size='md' isOpen={isOpen}>
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
                value={id && tanggunganById?.nama}
              />
            </Stack>
            <Stack>
              <Text color='gray.600'>Nominal Pembayaran</Text>
              <InputGroup>
                <InputLeftAddon borderRadius='sm' children='Rp' bg='#f6f6f6' />
                <Input
                  borderRadius='sm'
                  value={id && tanggunganById?.nominal}
                  type='number'
                  placeholder='Nominal'
                />
              </InputGroup>
            </Stack>
            <Stack>
              <Text color='gray.600'>Keterangan</Text>
              <Input
                borderRadius='sm'
                value={id && tanggunganById?.ket}
                type='text'
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
            w='11.5rem'
            variant='outline'
          >
            Close
          </Button>
          <Button borderRadius='2' w='11.5rem' colorScheme='blue'>
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default TanggunganModal
