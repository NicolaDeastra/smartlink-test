import { Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

export interface PengaturanGajiProps {
  id: number
  jenis: string
  nama: string
  nominal: number
  kehadiran: number
}

function totalKehadiran(nominal: number, kehadiran: number) {
  return formatNumber(nominal * kehadiran)
}

function formatNumber(num: number) {
  return Intl.NumberFormat('id-Id').format(num)
}

function PengaturanGaji({
  id,
  jenis,
  nama,
  nominal,
  kehadiran,
}: PengaturanGajiProps) {
  return (
    <Flex justifyContent='space-between'>
      <Stack spacing='0'>
        <Text fontSize='lg'>{nama}</Text>
        <Text size='md' color='gray.600'>
          {nama === 'Gaji Pokok'
            ? `${formatNumber(nominal)} x 1 ${jenis}`
            : `${formatNumber(nominal)} x ${kehadiran} ${jenis}`}
        </Text>
      </Stack>
      <HStack>
        <Text size='md'>
          {nama === 'Gaji Pokok'
            ? `${formatNumber(nominal)}`
            : totalKehadiran(nominal, kehadiran)}
        </Text>
        <EditIcon color='blue.500' />
      </HStack>
    </Flex>
  )
}

export default PengaturanGaji
