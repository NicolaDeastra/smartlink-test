import { RootState } from '../store'
import {
  GajiType,
  PengaturanGajiType,
  PengaturanUpah,
  Komisi,
  Tanggungan,
} from './types'

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

export const gajiBersih = (state: RootState): number =>
  state.gaji.total_gaji_bersih

export const tanggungan = (state: RootState): Tanggungan[] =>
  state.gaji.tanggungan

export const totalTanggungan = (state: RootState): number =>
  state.gaji.total_tanggungan

export const tanggunganDibayar = (state: RootState): number =>
  state.gaji.tanggungan_dibayar
