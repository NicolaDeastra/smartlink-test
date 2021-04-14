import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

import { gajiBersih } from '@src/store/gaji'
import { formatNumber } from '@src/utils'

function GajiBersihBox({ cetak }: { cetak?: boolean }) {
  const totalGajiKotor = useSelector(gajiBersih)

  return (
    <Stack spacing='6' p={['4', '6']} bg='white'>
      <Flex justifyContent='space-between'>
        <Heading fontSize={['md', 'xl']} color='blue.600'>
          Total Gaji Kotor <CheckCircleIcon color='green.600' />
        </Heading>
        <Heading fontSize={['md', 'xl']} color='blue.600'>
          Rp {formatNumber(totalGajiKotor)}
        </Heading>
      </Flex>
      <Text color='gray.600'>
        Nominal akhir yang diterima karyawan setelah ditambah komisi dikurangi
        pembayaran tanggungan (jika ada).
      </Text>
      {cetak ? null : (
        <Link href='/pembayaran'>
          <Button bg='blue.600' color='white' _hover={{ bg: 'blue.700' }}>
            Berikutnya
          </Button>
        </Link>
      )}
    </Stack>
  )
}

export default GajiBersihBox
