import {
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
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
import { pengaturanGaji, kehadiran, periode } from '@src/store/gaji'
import { formatNumber } from '@src/utils'

interface GajiModalProps {
  id: number
  isOpen: boolean
  onClose: () => void
  pokok: boolean
}

function GajiModal({ isOpen, onClose, pokok, id }: GajiModalProps) {
  const total = useSelector(pengaturanGaji)
  const hadir = useSelector(kehadiran)
  const totalPeriode = useSelector(periode)
  const totalById = total.find((item) => item.id === id)
  let nominal = 0
  if (totalById) {
    nominal = totalById?.nominal
  }

  return (
    <Modal onClose={onClose} size='md' isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mx='auto' fontSize='md'>
          {pokok ? 'Ubah Gaji Pokok' : 'Ubah Uang Absen/Transport/Lembur'}
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody px='8'>
          <Stack spacing='2'>
            <Text color='gray.600'>Nominal</Text>
            <HStack>
              <InputGroup w={pokok ? '18rem' : '10rem'}>
                <InputLeftAddon borderRadius='sm' children='Rp' bg='#f6f6f6' />
                <Input
                  borderRadius='sm'
                  type='number'
                  placeholder='Nominal'
                  value={nominal}
                />
              </InputGroup>
              <Text color='gray.600' fontWeight='bold'>
                X
              </Text>
              {pokok ? (
                <InputGroup borderRadius='4'>
                  <Input
                    borderRadius='sm'
                    value={totalPeriode}
                    type='number'
                    placeholder='Periode'
                  />
                  <InputRightAddon
                    borderRadius='sm'
                    children='Periode'
                    bg='#f6f6f6'
                  />
                </InputGroup>
              ) : (
                <Text>{hadir} Hari</Text>
              )}
            </HStack>
            <Flex justifyContent='space-between' pt='8'>
              <Text>Jumlah</Text>
              <Text>
                Rp
                {pokok ? formatNumber(nominal) : formatNumber(nominal * hadir)}
              </Text>
            </Flex>
          </Stack>
        </ModalBody>
        <ModalFooter mx='auto'>
          <Button borderRadius='2' w={['19rem', '24rem']} colorScheme='blue'>
            Simpan
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default GajiModal
