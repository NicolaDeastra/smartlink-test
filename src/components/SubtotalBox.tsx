import { useSelector } from 'react-redux'
import { Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { formatNumber } from '@src/utils'

import { SelectSalary } from '@src/store/gaji'

function SubtotalBox() {
  const data = useSelector(SelectSalary)

  return (
    <Stack bg='white' p={['4', '6']}>
      <Flex justifyContent='space-between'>
        <Text size='md'>Subtotal Gaji</Text>
        <Heading size='md'>Rp {formatNumber(data.total_gaji)}</Heading>
      </Flex>
      <Flex justifyContent='space-between'>
        <Text size='md'>Subtotal Upah</Text>
        <Heading size='md'>Rp {formatNumber(data.total_upah)}</Heading>
      </Flex>
      <Flex justifyContent='space-between'>
        <Text size='md'>Subtotal Komisi</Text>
        <Heading size='md'>Rp {formatNumber(data.total_komisi)}</Heading>
      </Flex>
      <Flex justifyContent='space-between' py='4'>
        <Text size='md'>Gaji Kotor</Text>
        <Heading size='md' color='green.400'>
          Rp {formatNumber(data.total_gaji_kotor)}
        </Heading>
      </Flex>
      <Flex justifyContent='space-between' py='4'>
        <Text size='md' color='red.500'>
          Tanggungan
        </Text>
        <Heading size='md' color='red.500'>
          Rp {formatNumber(data.tanggungan_dibayar)}
        </Heading>
      </Flex>
      <Divider />
      <Flex justifyContent='space-between' py='4'>
        <Heading size='md' color='blue.500'>
          Total Gaji Bersih
        </Heading>
        <Heading size='md' color='blue.500'>
          Rp {formatNumber(data.total_gaji_bersih)}
        </Heading>
      </Flex>
    </Stack>
  )
}

export default SubtotalBox
