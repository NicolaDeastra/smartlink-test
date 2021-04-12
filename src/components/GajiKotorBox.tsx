import { useSelector } from 'react-redux'
import { Flex, Heading, Stack } from '@chakra-ui/react'

import { gajiKotor } from '@src/store/gaji'
import { formatNumber } from '@src/utils'

function GajiKotorBox() {
  const totalGajiKotor = useSelector(gajiKotor)

  return (
    <Stack spacing='6' p={['4', '6']} bg='white'>
      <Flex justifyContent='space-between'>
        <Heading size={['sm', 'md']} color='green.400'>
          Total Gaji Kotor
        </Heading>
        <Heading size={['sm', 'md']} color='green.400'>
          Rp {formatNumber(totalGajiKotor)}
        </Heading>
      </Flex>
    </Stack>
  )
}

export default GajiKotorBox
