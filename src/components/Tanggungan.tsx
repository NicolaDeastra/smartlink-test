import { Flex, HStack, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import TanggunganModal from './TanggunganModal'

export interface TanggunganProps {
  id?: string
  nama: string
  ket: string
  nominal: number
  cetak?: boolean
}

function Tanggungan({ nama, ket, nominal, cetak, id }: TanggunganProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex justifyContent='space-between'>
        <Stack spacing='0'>
          <Text fontSize={['md', 'lg']}>{nama}</Text>
          <Text fontSize={['sm', 'md']} color='gray.600'>
            {ket}
          </Text>
        </Stack>
        <HStack>
          <Text size='md' color='red.500'>
            {nominal}
          </Text>
          {cetak ? null : (
            <EditIcon color='red.500' onClick={onOpen} cursor='pointer' />
          )}
        </HStack>
      </Flex>
      <TanggunganModal isOpen={isOpen} onClose={onClose} id={id} />
    </>
  )
}

export default Tanggungan
