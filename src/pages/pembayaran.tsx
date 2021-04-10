import Link from 'next/link'
import { HStack, Heading, Stack, Divider, Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import Layout from '@components/Layout'
import SubtotalBox from '@src/components/SubtotalBox'
import HeadComponents from '@src/components/Head'

function Pembayaran() {
  return (
    <Layout>
      <HeadComponents title='Pembayaran' />
      <Stack>
        <HStack spacing='12rem' py='4'>
          <Link href='/'>
            <ArrowBackIcon color='blue.600' cursor='pointer' boxSize={6} />
          </Link>
          <Heading size='md'>Detail Pembayaran</Heading>
        </HStack>
        <Divider />
        <Stack bg='#f2f5f7' spacing='4'>
          <SubtotalBox />
          <Link href='/faktur'>
            <Button>Cetak</Button>
          </Link>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Pembayaran
