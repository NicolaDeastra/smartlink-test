import { Flex, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { formatNumber } from '@src/utils'
import KomisiModal from './KomisiModal'

export interface KomisiProps {
  id: string
  nama: string
  nominal: number
  cetak?: boolean
}

function Komisi({ nama, nominal, cetak, id }: KomisiProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex justifyContent='space-between'>
        <Text fontSize='lg'>{nama}</Text>

        <HStack>
          <Text size='md'>{formatNumber(nominal)}</Text>
          {cetak ? null : (
            <EditIcon color='blue.500' onClick={onOpen} cursor='pointer' />
          )}
        </HStack>
      </Flex>
      <KomisiModal isOpen={isOpen} onClose={onClose} id={id} />
    </>
  )
}

export default Komisi
