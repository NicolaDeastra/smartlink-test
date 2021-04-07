import { Center, Heading, Stack, Text, Divider, Flex } from '@chakra-ui/react'
import { useQuery } from 'react-query'

import Service from '@src/services'
import Layout from '@components/Layout'
import PengaturanGaji, { PengaturanGajiProps } from '@components/PengaturanGaji'

function formatDate(date: string) {
  const newDate = new Date(date)
  return newDate.toDateString()
}

const Index = () => {
  const { data: inquiry, isLoading, isError } = useQuery(
    'data',
    Service.getInquiry
  )

  return (
    <Layout>
      <Stack>
        <Center p='4'>
          <Heading size='md'>Faktur Gaji</Heading>
        </Center>
        <Divider />
        {isLoading && <Text>Loading...</Text>}
        {isError && <Text>Error</Text>}
        {inquiry && (
          <Stack bg='#f2f5f7' spacing='4'>
            <Stack spacing='6' p='6' bg='white'>
              <Heading size='md'>{inquiry.data.nama_karyawan}</Heading>
              <Text color='gray.600'>
                {formatDate(inquiry.data.tanggal_awal)} -{' '}
                {formatDate(inquiry.data.tanggal_akhir)}
              </Text>

              <Divider />
              <Flex justifyContent='space-between'>
                <Text color='gray.600'>
                  Masuk {inquiry.data.total_kehadiran} Hari
                </Text>
                <Text color='blue.500'>Ubah kehadiran</Text>
              </Flex>
            </Stack>
            <Stack spacing='6' p='6' bg='white'>
              <Heading size='sm'>Gaji</Heading>
              {inquiry.data.pengaturan_gaji?.map(
                (data: PengaturanGajiProps) => (
                  <PengaturanGaji
                    key={data.id}
                    id={data.id}
                    jenis={data.jenis}
                    nama={data.nama}
                    nominal={data.nominal}
                    kehadiran={inquiry.data.total_kehadiran}
                  />
                )
              )}
              <Divider />
              <Flex justifyContent='space-between'>
                <Heading size='md'>Subtotal Gaji</Heading>
                <Heading size='md'>Rp 2.524.000</Heading>
              </Flex>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Layout>
  )
}

export default Index
