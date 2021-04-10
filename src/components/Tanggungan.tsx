import { Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

export interface TanggunganProps {
  id?: number
  nama: string
  ket: string
  nominal: number
  cetak?: boolean
}

function Tanggungan({ nama, ket, nominal, cetak }: TanggunganProps) {
  return (
    <Flex justifyContent='space-between'>
      <Stack spacing='0'>
        <Text fontSize='lg'>{nama}</Text>
        <Text size='md' color='gray.600'>
          {ket}
        </Text>
      </Stack>
      <HStack>
        <Text size='md' color='red.500'>
          {nominal}
        </Text>
        {cetak ? null : <EditIcon color='red.500' />}
      </HStack>
    </Flex>
  )
}

export default Tanggungan
