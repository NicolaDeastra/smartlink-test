module.exports = {
  upah: [
    { id: 1, nama: 'Mencuci', nominal: 200, jumlah: 100, satuan: 'KG' },
    { id: 2, nama: 'Menyetrikan', nominal: 1600, jumlah: 50, satuan: 'KG' },
  ],
  totalUpah: 100000,
  komisi: [{ id: 1, nama: 'Bonus Target 1', nominal: 200000 }],
  totalKomisi: 200000,
  totalGajiKotor: 2824000,
  tanggungan: [
    {
      id: 1,
      nama: 'Ganti Barang Hilang',
      ket: 'Baju yang hilang warna merah',
      denda: 50000,
    },
    {
      id: 2,
      nama: 'Denda Keterlambatan',
      ket: 'Karena terlambat 3 hari berturut-turut',
      denda: 20000,
    },
  ],
  totalTanggungan: 570000,
  tanggunganDibayar: 70000,
  totalGajiBersih: 2124000,
}
