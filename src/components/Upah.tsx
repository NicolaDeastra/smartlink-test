import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import { formatNumber } from '@src/utils'

export interface UpahProps {
  id?: number
  nama: string
  nominal: number
  satuan: string
  jumlah: number
  cetak?: boolean
}

function Upah({ nama, nominal, satuan, jumlah, cetak }: UpahProps) {
  return (
    <Flex justifyContent='space-between'>
      <Stack spacing='0'>
        <Text fontSize='lg'>{nama}</Text>
        <Text size='md' color='gray.600'>
          {jumlah} {satuan}
        </Text>
      </Stack>
      <HStack>
        <Text size='md'>{formatNumber(nominal * jumlah)}</Text>

        {cetak ? null : <CloseIcon color='gray.400' />}
      </HStack>
    </Flex>
  )
}

export default Upah
