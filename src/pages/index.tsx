import { Center, Heading, Stack, Divider } from '@chakra-ui/react'

import Layout from '@components/Layout'
import HeadingBox from '@src/components/HeadingBox'
import GajiBox from '@components/GajiBox'
import UpahBox from '@components/UpahBox'
import KomisiBox from '@src/components/KomisiBox'
import GajiKotorBox from '@src/components/GajiKotorBox'
import TanggunganBox from '@src/components/TanggunganBox'
import GajiBersihBox from '@src/components/GajiBersihBox'
import HeadComponents from '@src/components/Head'

const Index = () => {
  return (
    <Layout>
      <HeadComponents title='Faktur Gaji' />
      <Stack>
        <Center p='4'>
          <Heading size='md'>Faktur Gaji</Heading>
        </Center>
        <Divider />
        <Stack bg='#f2f5f7' spacing='4'>
          <HeadingBox />
          <GajiBox />
          <UpahBox />
          <KomisiBox />
          <GajiKotorBox />
          <TanggunganBox />
          <GajiBersihBox />
        </Stack>
      </Stack>
    </Layout>
  )
}

export default Index
