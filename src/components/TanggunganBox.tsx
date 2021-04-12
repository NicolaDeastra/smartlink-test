import { useSelector } from 'react-redux'
import {
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { SmallAddIcon } from '@chakra-ui/icons'

import Tanggungan, { TanggunganProps } from '@components/Tanggungan'
import { tanggungan, totalTanggungan, tanggunganDibayar } from '@src/store/gaji'

import { formatNumber } from '@src/utils'
import TanggunganModal from './TanggunganModal'

const Total = ({ total }: { total: number }) => {
  let color = 'black'
  if (total > 0) {
    color = 'green.500'
  } else if (total < 0) {
    color = 'red.500'
  }

  return (
    <Heading size='md' color={color}>
      Rp {formatNumber(total)}
    </Heading>
  )
}

function TanggunganBox({ cetak }: { cetak?: boolean }) {
  const total = useSelector(totalTanggungan)
  const dibayar = useSelector(tanggunganDibayar)
  const dataTanggungan = useSelector(tanggungan)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Stack spacing='6' p={['4', '6']} bg='white'>
        <Stack spacing='2'>
          <Heading size='sm'>Tanggungan</Heading>
          <Text color='gray.600'>
            Karyawan ini memiliki tanggungan Rp {formatNumber(total)}
          </Text>
        </Stack>
        <Divider />
        {cetak ? null : (
          <HStack>
            <SmallAddIcon color='blue.500' />
            <Text color='blue.500' cursor='pointer' onClick={onOpen}>
              Tambah Pembayaran Tanggunang
            </Text>
          </HStack>
        )}
        {dataTanggungan?.map((data: TanggunganProps) => (
          <Tanggungan
            key={data.nama}
            nama={data.nama}
            ket={data.ket}
            id={data.id}
            nominal={data.nominal}
            cetak={cetak}
          />
        ))}
        <Flex justifyContent='space-between'>
          <Heading size='md'>Tanggungan Dibayar</Heading>
          <Total total={dibayar} />
        </Flex>
      </Stack>
      <TanggunganModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default TanggunganBox
