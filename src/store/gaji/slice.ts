import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import initialState from './initailState'
import {
  SetKehadiranType,
  PengaturanGajiType,
  SetGajiPokok,
  AddKomisi,
  Komisi,
} from './types'

const countTotalGaji = (
  items: PengaturanGajiType[],
  kehadiran: number,
  initalValue: number
) => {
  const data = items.slice(1, 5)

  return data.reduce((acc, curr) => acc + curr.nominal * kehadiran, initalValue)
}

const countTotalGajiKotor = (
  totalGaji: number,
  komisi: number,
  upah: number
) => {
  return totalGaji + komisi + upah
}

const countTotalKomis = (items: Komisi[]) => {
  return items.reduce((acc, curr) => acc + curr.nominal, 0)
}

const gajiSlice = createSlice({
  name: 'gaji',
  initialState,
  reducers: {
    setKehadiran: (state, action: PayloadAction<SetKehadiranType>) => {
      const { newKehadiran } = action.payload

      state.total_kehadiran = newKehadiran

      state.total_gaji = countTotalGaji(
        state.pengaturan_gaji,
        state.total_kehadiran,
        state.pengaturan_gaji[0].nominal * state.total_periode
      )

      state.total_gaji_kotor = countTotalGajiKotor(
        state.total_gaji,
        state.total_komisi,
        state.total_upah
      )
    },

    setGajiById: (state, action: PayloadAction<SetGajiPokok>) => {
      const { nominal, id } = action.payload

      const gajiById = state.pengaturan_gaji.find((gaji) => gaji.id === id)

      if (gajiById) {
        gajiById.nominal = nominal
      }

      state.total_gaji = countTotalGaji(
        state.pengaturan_gaji,
        state.total_kehadiran,
        state.pengaturan_gaji[0].nominal * state.total_periode
      )

      state.total_gaji_kotor = countTotalGajiKotor(
        state.total_gaji,
        state.total_komisi,
        state.total_upah
      )
    },

    addKomisi: {
      reducer(state, action: PayloadAction<AddKomisi>) {
        state.komisi.push(action.payload)

        state.total_komisi = countTotalKomis(state.komisi)

        state.total_gaji_kotor = countTotalGajiKotor(
          state.total_gaji,
          state.total_komisi,
          state.total_upah
        )
      },
      prepare(nama: string, nominal: number) {
        return {
          payload: {
            id: nanoid(),
            nama,
            nominal,
          },
        }
      },
    },

    editKomisi: (state, action: PayloadAction<AddKomisi>) => {
      const { id, nominal, nama } = action.payload

      const komisiById = state.komisi.find((item) => item.id === id)

      if (komisiById) {
        komisiById.nama = nama
        komisiById.nominal = nominal
      }

      state.total_komisi = countTotalKomis(state.komisi)

      state.total_gaji_kotor = countTotalGajiKotor(
        state.total_gaji,
        state.total_komisi,
        state.total_upah
      )
    },
  },
})

export const {
  setKehadiran,
  setGajiById,
  addKomisi,
  editKomisi,
} = gajiSlice.actions

export default gajiSlice.reducer
