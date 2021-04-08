import { useSelector } from 'react-redux'
import { Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { formatDate } from '@src/utils'

import { SelectSalary } from '@src/store/gaji'

function HeadingBox() {
  const data = useSelector(SelectSalary)

  return (
    <Stack spacing='6' p='6' bg='white'>
      <Heading size='md'>{data.nama_karyawan}</Heading>
      <Text color='gray.600'>
        {formatDate(data.tanggal_awal)} - {formatDate(data.tanggal_akhir)}
      </Text>

      <Divider />
      <Flex justifyContent='space-between'>
        <Text color='gray.600'>Masuk {data.total_kehadiran} Hari</Text>
        <Text color='blue.500'>Ubah kehadiran</Text>
      </Flex>
    </Stack>
  )
}

export default HeadingBox
