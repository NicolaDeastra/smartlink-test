import { Center, Divider, Heading, Stack } from '@chakra-ui/react'

import GajiBox from '@src/components/GajiBox'
import Layout from '@src/components/Layout'
import UpahBox from '@components/UpahBox'
import KomisiBox from '@src/components/KomisiBox'
import GajiKotorBox from '@src/components/GajiKotorBox'
import TanggunganBox from '@src/components/TanggunganBox'
import GajiBersihBox from '@src/components/GajiBersihBox'
import HeadingBox from '@src/components/HeadingBox'
import HeadComponents from '@src/components/Head'
import KeteranganBox from '@src/components/KeteranganBox'

function Faktur() {
  return (
    <Layout>
      <HeadComponents title='Cetak Gaji' />
      <Stack>
        <Center p='4'>
          <Heading size='md'>Detail Faktur</Heading>
        </Center>
        <Divider />
        <Stack bg='#f2f5f7' spacing='4'>
          <HeadingBox cetak />
          <GajiBox cetak />
          <UpahBox cetak />
          <KomisiBox cetak />
          <GajiKotorBox />
          <TanggunganBox cetak />
          <GajiBersihBox cetak />
          <KeteranganBox />
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Faktur
