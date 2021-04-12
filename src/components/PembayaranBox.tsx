import Link from 'next/link'
import {
  Stack,
  chakra,
  Text,
  Input,
  Select,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'

export interface BanksType {
  nomor: string
  bank: string
  pemilik: string
}

interface PembayaranBoxProps {
  bank: BanksType[]
}

function PembayaranBox({ bank }: PembayaranBoxProps) {
  return (
    <Stack bg='white' spacing='6' p='6'>
      <Stack>
        <Text>
          Bayar dari rekening <chakra.span color='blue.600'>*</chakra.span>
        </Text>
        <Select placeholder='Pilih Rekening Bank'>
          {bank?.map((data: BanksType) => (
            <option value={data.nomor} key={data.nomor}>
              {data.bank} atas nama {data.pemilik}
            </option>
          ))}
        </Select>
      </Stack>

      <Stack>
        <Text>
          Dicatat pada tanggal <chakra.span color='blue.600'>*</chakra.span>
        </Text>
        <InputGroup>
          <Input placeholder='Pilih Tanggal' />
          <InputRightElement children={<CalendarIcon color='gray.500' />} />
        </InputGroup>
      </Stack>
      <Stack>
        <Text>Keterangan</Text>
        <Input placeholder='Tambah Keterangan...' />
      </Stack>
      <Link href='/faktur'>
        <Button bg='blue.600' color='white' _hover={{ bg: 'blue.700' }}>
          Submit Gaji
        </Button>
      </Link>
    </Stack>
  )
}

export default PembayaranBox
