import { Divider, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'

import Tanggungan, { TanggunganProps } from '@components/Tanggungan'

import { formatNumber } from '@src/utils'

function TanggunganBox() {
  return (
    <Stack spacing='6' p='6' bg='white'>
      <Stack spacing='2'>
        <Heading size='sm'>Tanggungan</Heading>
        <Text color='gray.600'>
          Karyawan ini memiliki tanggungan Rp{' '}
          {formatNumber(gaji.totalTanggungan)}
        </Text>
      </Stack>
      <Divider />
      <HStack>
        <SmallAddIcon color='blue.500' />
        <Text color='blue.500'>Tambah Pembayaran Tanggunang</Text>
      </HStack>
      {gaji.tanggungan?.map((data: TanggunganProps) => (
        <Tanggungan
          key={data.id}
          nama={data.nama}
          ket={data.ket}
          denda={data.denda}
        />
      ))}
      <Flex justifyContent='space-between'>
        <Heading size='md'>Tanggungan Dibayar</Heading>
        <Heading size='md' color='red.500'>
          (-) Rp {formatNumber(gaji.tanggunganDibayar)}
        </Heading>
      </Flex>
    </Stack>
  )
}

export default TanggunganBox
