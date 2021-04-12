import { Divider, Flex, Heading, Stack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { pengaturanUpah, totalUpah } from '@src/store/gaji'

import Upah, { UpahProps } from '@components/Upah'
import { formatNumber } from '@src/utils'

function UpahBox({ cetak }: { cetak?: boolean }) {
  const upah = useSelector(pengaturanUpah)
  const total = useSelector(totalUpah)

  return (
    <Stack spacing='6' p={['2', '6']} bg='white'>
      <Heading size='sm'>Upah borongan</Heading>
      {upah?.map((data: UpahProps) => (
        <Upah
          key={data.id}
          nama={data.nama}
          nominal={data.nominal}
          satuan={data.satuan}
          jumlah={data.jumlah}
          cetak={cetak}
        />
      ))}
      <Divider />
      <Flex justifyContent='space-between'>
        <Heading size='md'>Subtotal Upah</Heading>
        <Heading size='md'>Rp {formatNumber(total)}</Heading>
      </Flex>
    </Stack>
  )
}

export default UpahBox
