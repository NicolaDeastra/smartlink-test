export interface GajiType {
  id_karyawan: string
  nama_karyawan: string
  tanggal_awal: string
  tanggal_akhir: string
  total_kehadiran: number
  total_periode: number
  pengaturan_gaji: PengaturanGajiType[]
  pengaturan_upah: PengaturanUpah[]
  komisi: Komisi[]
  tanggungan: Tanggungan[]
  total_gaji: number
  total_gaji_kotor: number
  total_gaji_bersih: number
  total_upah: number
  total_komisi: number
  total_tanggungan: number
  tanggungan_dibayar: number
  tanggal_catat: string
  keterangan: string
}

export interface PengaturanGajiType {
  id: number
  jenis: string
  nama: string
  nominal: number
}

export interface PengaturanUpah {
  id: number
  nama: string
  nominal: number
  jumlah: number
  satuan: string
}

export interface Komisi {
  id: string
  nama: string
  nominal: number
}

export interface Tanggungan {
  id: string
  nama: string
  ket: string
  nominal: number
}

export interface SetKehadiranType {
  newKehadiran: number
}

export interface SetGajiPokok {
  id: number
  nominal: number
}

export interface AddKomisi {
  id: string
  nama: string
  nominal: number
}
