import { GajiType } from './types'

const initialState: GajiType = {
  id_karyawan: 'KRY2098201001',
  nama_karyawan: 'Bu Adara Olivia',
  tanggal_awal: '2021-01-01',
  tanggal_akhir: '2021-01-31',
  total_kehadiran: 22,
  total_periode: 1,
  pengaturan_gaji: [
    {
      id: 1,
      jenis: 'periode',
      nama: 'Gaji Pokok',
      nominal: 800000,
    },
    {
      id: 2,
      jenis: 'kehadiran',
      nama: 'Uang Makan',
      nominal: 10000,
    },
    {
      id: 3,
      jenis: 'periode',
      nama: 'Uang Absen',
      nominal: 12000,
    },
    {
      id: 4,
      jenis: 'periode',
      nama: 'Uang Transport',
      nominal: 15000,
    },
    {
      id: 5,
      jenis: 'periode',
      nama: 'Uang Snack',
      nominal: 5000,
    },
  ],

  pengaturan_upah: [
    { id: 1, nama: 'Mencuci', nominal: 200, jumlah: 100, satuan: 'KG' },
    { id: 2, nama: 'Menyetrikan', nominal: 1600, jumlah: 50, satuan: 'KG' },
  ],
  komisi: [
    {
      id: '1b22',
      nama: 'Bonus Target 1',
      nominal: 200000,
    },
  ],
  tanggungan: [
    {
      id: 'd22r',
      nama: 'Ganti Barang Hilang',
      ket: 'Baju yang hilang warna merah',
      nominal: 50000,
    },
    {
      id: '22rt',
      nama: 'Denda Keterlambatan',
      ket: 'Karena terlambat 3 hari berturut-turut',
      nominal: 120000,
    },
  ],

  total_gaji: 1724000,
  total_gaji_kotor: 2024000,
  total_gaji_bersih: 2124000,
  total_upah: 100000,
  total_komisi: 200000,
  total_tanggungan: 570000,
  tanggungan_dibayar: -70000,
  tanggal_catat: '',
  keterangan: '',
}

export default initialState
