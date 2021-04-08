import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

import { formatNumber, totalKehadiran } from '@src/utils'

export interface PengaturanGajiProps {
  id: number
  jenis: string
  nama: string
  nominal: number
  kehadiran: number
  periode: number
}

function PengaturanGaji({
  jenis,
  nama,
  nominal,
  kehadiran,
  periode,
}: PengaturanGajiProps) {
  return (
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
        <EditIcon color='blue.500' />
      </HStack>
    </Flex>
  )
}

export default PengaturanGaji
