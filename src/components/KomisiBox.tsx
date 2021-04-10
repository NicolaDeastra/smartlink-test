import { useSelector } from 'react-redux'
import { SmallAddIcon } from '@chakra-ui/icons'
import { Divider, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'

import { komisi, totalKomisi } from '@src/store/gaji'
import Komisi, { KomisiProps } from '@components/Komisi'
import { formatNumber } from '@src/utils'

function KomisiBox({ cetak }: { cetak?: boolean }) {
  const dataKomisi = useSelector(komisi)
  const total = useSelector(totalKomisi)

  return (
    <Stack spacing='6' p='6' bg='white'>
      <Heading size='sm'>Komisi</Heading>
      {cetak ? null : (
        <HStack>
          <SmallAddIcon color='blue.500' />
          <Text color='blue.500'>Tambah komisi lain</Text>
        </HStack>
      )}
      {dataKomisi?.map((data: KomisiProps) => (
        <Komisi
          key={data.nama}
          nama={data.nama}
          nominal={data.nominal}
          cetak={cetak}
        />
      ))}
      <Divider />
      <Flex justifyContent='space-between'>
        <Heading size='md'>Subtotal Komisi</Heading>
        <Heading size='md'>Rp {formatNumber(total)}</Heading>
      </Flex>
    </Stack>
  )
}

export default KomisiBox
