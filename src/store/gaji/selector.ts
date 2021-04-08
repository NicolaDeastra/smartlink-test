import { RootState } from '../store'
import { GajiType, PengaturanGajiType, PengaturanUpah, Komisi } from './types'

export const SelectSalary = (state: RootState): GajiType => state.gaji

export const pengaturanGaji = (state: RootState): PengaturanGajiType[] =>
  state.gaji.pengaturan_gaji

export const kehadiran = (state: RootState): number =>
  state.gaji.total_kehadiran

export const pengaturanUpah = (state: RootState): PengaturanUpah[] =>
  state.gaji.pengaturan_upah

export const totalUpah = (state: RootState): number => state.gaji.total_upah

export const komisi = (state: RootState): Komisi[] => state.gaji.komisi

export const totalKomisi = (state: RootState): number => state.gaji.total_komisi

export const gajiKotor = (state: RootState): number =>
  state.gaji.total_gaji_kotor
