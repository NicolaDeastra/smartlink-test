import { Button, Stack, Text } from '@chakra-ui/react'

function KeteranganBox() {
  return (
    <Stack spacing='6' p={['4', '6']} bg='white'>
      <Stack spacing='2'>
        <Text fontSize='sm' color='gray.600'>
          Keterangan
        </Text>
        <Text>Lebih Semangat Lagi Ya!</Text>
      </Stack>
      <Button bg='green.400' color='white' _hover={{ bg: 'green.500' }}>
        Cetak
      </Button>
    </Stack>
  )
}

export default KeteranganBox
