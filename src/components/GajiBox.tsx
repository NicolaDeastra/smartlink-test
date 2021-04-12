import { useSelector } from 'react-redux'
import { Divider, Flex, Heading, Stack } from '@chakra-ui/react'

import PengaturanGaji from '@components/PengaturanGaji'
import { SelectSalary, PengaturanGajiType } from '@src/store/gaji'

import { formatNumber } from '@src/utils'

function GajiBox({ cetak }: { cetak?: boolean }) {
  const gaji = useSelector(SelectSalary)

  return (
    <Stack spacing='6' p={['4', '6']} bg='white'>
      <Heading size='sm'>Gaji</Heading>
      {gaji.pengaturan_gaji?.map((data: PengaturanGajiType) => (
        <PengaturanGaji
          key={data.id}
          id={data.id}
          jenis={data.jenis}
          nama={data.nama}
          nominal={data.nominal}
          kehadiran={gaji.total_kehadiran}
          periode={gaji.total_periode}
          cetak={cetak}
        />
      ))}
      <Divider />
      <Flex justifyContent='space-between'>
        <Heading size='md'>Subtotal Gaji</Heading>
        <Heading size='md'>Rp{formatNumber(gaji.total_gaji)}</Heading>
      </Flex>
    </Stack>
  )
}

export default GajiBox
