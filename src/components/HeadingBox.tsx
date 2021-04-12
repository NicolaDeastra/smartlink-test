import * as React from 'react'
import { useSelector } from 'react-redux'
import {
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { formatDate } from '@src/utils'
import HeadingModal from '@components/HeadingModal'

import { SelectSalary } from '@src/store/gaji'

function HeadingBox({ cetak }: { cetak?: boolean }) {
  const data = useSelector(SelectSalary)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Stack spacing='6' p={['2', '6']} bg='white'>
        {cetak && (
          <Stack spacing='2'>
            <Heading size='md'>{data.id_karyawan}</Heading>
            <Text color='gray.600'>
              Dicatat : {formatDate(data.tanggal_catat)}
            </Text>
          </Stack>
        )}

        <Stack spacing='2'>
          <Heading size='md'>{data.nama_karyawan}</Heading>
          <Text color='gray.600'>
            {cetak && 'Periode :'} {formatDate(data.tanggal_awal)} -{' '}
            {formatDate(data.tanggal_akhir)}
          </Text>
        </Stack>

        <Divider />
        {cetak ? null : (
          <Flex justifyContent='space-between'>
            <Text color='gray.600'>Masuk {data.total_kehadiran} Hari</Text>
            <Text color='blue.500' cursor='pointer' onClick={onOpen}>
              Ubah kehadiran
            </Text>
          </Flex>
        )}
      </Stack>
      <HeadingModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default HeadingBox
