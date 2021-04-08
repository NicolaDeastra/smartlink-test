import { Flex, HStack, Text } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { formatNumber } from '@src/utils'

export interface KomisiProps {
  nama: string
  nominal: number
}

function Komisi({ nama, nominal }: KomisiProps) {
  return (
    <Flex justifyContent='space-between'>
      <Text fontSize='lg'>{nama}</Text>

      <HStack>
        <Text size='md'>{formatNumber(nominal)}</Text>
        <EditIcon color='blue.500' />
      </HStack>
    </Flex>
  )
}

export default Komisi
