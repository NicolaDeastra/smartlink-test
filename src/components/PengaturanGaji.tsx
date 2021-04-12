import * as React from 'react'
import { Flex, HStack, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import { formatNumber, totalKehadiran } from '@src/utils'
import GajiModal from './GajiModal'

export interface PengaturanGajiProps {
  id: number
  jenis: string
  nama: string
  nominal: number
  kehadiran: number
  periode: number
  cetak?: boolean
}

function PengaturanGaji({
  id,
  jenis,
  nama,
  nominal,
  kehadiran,
  periode,
  cetak,
}: PengaturanGajiProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pokok, setPokok] = React.useState(false)

  const handleEditClick = (pokok: boolean) => {
    setPokok(pokok)
    onOpen()
  }

  return (
    <>
      <Flex justifyContent='space-between'>
        <Stack spacing='0'>
          <Text fontSize='lg'>{nama}</Text>
          <Text size='md' color='gray.600'>
            {nama === 'Gaji Pokok'
              ? `${formatNumber(nominal)} x ${periode} ${jenis}`
              : `${formatNumber(nominal)} x ${kehadiran} ${jenis}`}
          </Text>
        </Stack>
        <HStack>
          <Text size='md'>
            {nama === 'Gaji Pokok'
              ? totalKehadiran(nominal, periode)
              : totalKehadiran(nominal, kehadiran)}
          </Text>

          {cetak ? null : nama === 'Gaji Pokok' ? (
            <EditIcon
              cursor='pointer'
              color='blue.500'
              onClick={() => handleEditClick(true)}
            />
          ) : (
            <EditIcon
              cursor='pointer'
              color='blue.500'
              onClick={() => handleEditClick(false)}
            />
          )}
        </HStack>
      </Flex>
      <GajiModal id={id} onClose={onClose} pokok={pokok} isOpen={isOpen} />
    </>
  )
}

export default PengaturanGaji
