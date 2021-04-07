import {
  Center,
  Heading,
  Stack,
  Text,
  Divider,
  Flex,
  HStack,
} from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { SmallAddIcon } from '@chakra-ui/icons'

import Service from '@src/services'
import Layout from '@components/Layout'
import PengaturanGaji, {
  PengaturanGajiProps,
  formatNumber,
} from '@components/PengaturanGaji'
import Upah, { UpahProps } from '@components/Upah'
import Komisi, { KomisiProps } from '@components/Komisi'
import Tanggungan, { TanggunganProps } from '@components/Tanggungan'

import gaji from '@src/services/upah'

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
            <Stack spacing='6' p='6' bg='white'>
              <Heading size='sm'>Upah borongan</Heading>
              {gaji.upah?.map((data: UpahProps) => (
                <Upah
                  key={data.id}
                  nama={data.nama}
                  nominal={data.nominal}
                  satuan={data.satuan}
                  jumlah={data.jumlah}
                />
              ))}
              <Divider />
              <Flex justifyContent='space-between'>
                <Heading size='md'>Subtotal Upah</Heading>
                <Heading size='md'>Rp {formatNumber(gaji.totalUpah)}</Heading>
              </Flex>
            </Stack>
            <Stack spacing='6' p='6' bg='white'>
              <Heading size='sm'>Komisi</Heading>
              <HStack>
                <SmallAddIcon color='blue.500' />
                <Text color='blue.500'>Tambah komisi lain</Text>
              </HStack>
              {gaji.komisi?.map((data: KomisiProps) => (
                <Komisi nama={data.nama} nominal={data.nominal} />
              ))}
              <Divider />
              <Flex justifyContent='space-between'>
                <Heading size='md'>Subtotal Komisi</Heading>
                <Heading size='md'>Rp {formatNumber(gaji.totalKomisi)}</Heading>
              </Flex>
            </Stack>
            <Stack spacing='6' p='6' bg='white'>
              <Flex justifyContent='space-between'>
                <Heading size='md' color='green.400'>
                  Total Gaji Kotor
                </Heading>
                <Heading size='md' color='green.400'>
                  Rp {formatNumber(gaji.totalGajiKotor)}
                </Heading>
              </Flex>
            </Stack>
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
          </Stack>
        )}
      </Stack>
    </Layout>
  )
}

export default Index
