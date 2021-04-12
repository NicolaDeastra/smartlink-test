import Link from 'next/link'
import { HStack, Heading, Stack, Divider } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'

import Services from '@src/services'

import Layout from '@components/Layout'
import SubtotalBox from '@src/components/SubtotalBox'
import HeadComponents from '@src/components/Head'
import PembayaranBox, { BanksType } from '@src/components/PembayaranBox'

interface PembayaranProps {
  data: BanksType[]
}

export async function getServerSideProps() {
  const bank = await Services.getBanks()
  const data = bank.data
  return {
    props: {
      data,
    },
  }
}

function Pembayaran({ data }: PembayaranProps) {
  return (
    <Layout>
      <HeadComponents title='Pembayaran' />
      <Stack>
        <HStack spacing={['4rem ', '12rem']} p={['4', '6']}>
          <Link href='/'>
            <ArrowBackIcon color='blue.600' cursor='pointer' boxSize={6} />
          </Link>
          <Heading size='md'>Detail Pembayaran</Heading>
        </HStack>
        <Divider />
        <Stack bg='#f2f5f7' spacing='4'>
          <SubtotalBox />
          <PembayaranBox bank={data} />
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Pembayaran
